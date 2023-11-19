import {Component, OnInit} from '@angular/core';
import {Player} from "../../core/model/player";
import {PlayerService} from "../../core/services/player-service";
import {ActivatedRoute} from "@angular/router";
import {Team} from "../../core/model/team";
import {TeamService} from "../../core/services/team-service";

@Component({
  selector: 'app-profile-player',
  templateUrl: './profile-player.component.html',
  styleUrls: ['./profile-player.component.scss']
})
export class ProfilePlayerComponent implements OnInit {
  player?: Player;
  team?: Team;

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const surname = params['surname'];
      this.playerService.findBySurname(surname).subscribe(player => {
        this.player = player;
        this.teamService.getById(player.teamId).subscribe(team => {
          this.team = team; // Store the team information
        }, error => {
          // Handle team fetch error
        });
      }, error => {

      });
    });
  }

}
