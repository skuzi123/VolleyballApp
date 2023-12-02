import {Component, OnInit} from '@angular/core';
import {Team} from "../../core/model/team";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../../core/services/player-service";
import {TeamService} from "../../core/services/team-service";
import {TrainerService} from "../../core/services/trainer-service";
import {Trainer} from "../../core/model/trainer";
import {Player} from "../../core/model/player";
import {MatDialog} from "@angular/material/dialog";
import {EditTeamComponent} from "../edit-team/edit-team.component";

@Component({
  selector: 'app-profile-team',
  templateUrl: './profile-team.component.html',
  styleUrls: ['./profile-team.component.scss']
})
export class ProfileTeamComponent implements OnInit {
  team?: Team;
  trainers: Trainer[] = [];
  players: Player[] = [];
  trainer?: Trainer;


  constructor(private route: ActivatedRoute
    , private playerService: PlayerService
    , private trainerService: TrainerService
    , private teamService: TeamService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadTeams();
    this.loadTrainerData();
  }

  loadTrainerData() {
    const authUser = JSON.parse(localStorage.getItem('auth-user') as string);
    if (authUser && authUser.id) {
      this.trainerService.findByUser(authUser.id).subscribe(
        trainer => {
          this.trainer = trainer;
        },
        error => {
          console.error("Error loading trainer data");
        }
      );
    }
  }

  editTeam() {

    const dialogRef = this.dialog.open(EditTeamComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTeams();
      }
    });


  }

  isTrainer() {
    const authUser = localStorage.getItem('auth-user');
    if (authUser) {
      return JSON.parse(authUser).roles.includes('TRAINER');
    } else {
      console.error("Can't read role")
      return false;
    }
  }


  loadTeams() {
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
