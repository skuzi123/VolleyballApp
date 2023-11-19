import {Component, OnInit} from '@angular/core';
import {Team} from "../../core/model/team";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../../core/services/player-service";
import {TeamService} from "../../core/services/team-service";
import {TrainerService} from "../../core/services/trainer-service";
import {Trainer} from "../../core/model/trainer";
import {Player} from "../../core/model/player";

@Component({
  selector: 'app-profile-team',
  templateUrl: './profile-team.component.html',
  styleUrls: ['./profile-team.component.scss']
})
export class ProfileTeamComponent implements OnInit {
  team?: Team;
  trainers: Trainer[] = [];
  players: Player[] = [];


  constructor(private route: ActivatedRoute
    , private playerService: PlayerService
    , private trainerService: TrainerService
    , private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teamName = params['teamName'];
      this.teamService.getByTeamName(teamName).subscribe(team => {
        this.team = team;

        console.log(this.team.id);

        this.trainerService.findByTeam(this.team.id).subscribe(trainers => {
          this.trainers = trainers;
        }, error => {

        });

        this.playerService.findByTeam(this.team.id).subscribe(players => {
          this.players = players;
        }, error => {

        });
      });

    });

  }
}
