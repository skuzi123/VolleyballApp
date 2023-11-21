import {Component, OnInit} from '@angular/core';
import {MatchService} from "../services/match-service";
import {Match} from "../model/match";
import {SetService} from "../services/set-service";
import {TeamService} from "../services/team-service";
import {Team} from "../model/team";
import {Set} from "../model/set";
import {map} from "rxjs";
@Component({
  selector: 'app-match-carousel',
  templateUrl: './match-carousel.component.html',
  styleUrls: ['./match-carousel.component.scss']
})
export class MatchCarouselComponent implements OnInit {

  matches: any[] = [];
  teams: Team[] = [];
  sets: Set[] = [];
  currentMatches: any[] = [];
  currentIndex = 0;

  constructor(
    private matchService: MatchService,
    private setService: SetService,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches() {
    this.matchService.getMatches().subscribe((matches) => {
      this.matches = matches;
      this.matches.forEach(match => {
        // Retrieve and map the host team name
        this.teamService.getById(match.hostTeamId).pipe(
          map(team => team.teamName) // Extract only the teamName from the response
        ).subscribe(hostTeamName => {
          match.hostTeamName = hostTeamName; // Set the host team name
        });

        // Retrieve and map the guest team name
        this.teamService.getById(match.guestTeamId).pipe(
          map(team => team.teamName) // Extract only the teamName from the response
        ).subscribe(guestTeamName => {
          match.guestTeamName = guestTeamName; // Set the guest team name
        });

      });
    });
  }

  nextMatch() {
    if (this.currentIndex < this.matches.length - 5) {
      this.currentIndex++;
    }
  }

  previousMatch() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}

