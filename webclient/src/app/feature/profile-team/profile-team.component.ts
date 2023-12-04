import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../core/model/team";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../../core/services/player-service";
import {TeamService} from "../../core/services/team-service";
import {TrainerService} from "../../core/services/trainer-service";
import {Trainer} from "../../core/model/trainer";
import {Player} from "../../core/model/player";
import {MatDialog} from "@angular/material/dialog";
import {PlayerStarter} from "../../core/model/player-starter";
import {SeasonTeamService} from "../../core/services/seasonteam-service";
import {SeasonTeam} from "../../core/model/seasonteam";
import {SeasonService} from "../../core/services/season-service";
import {Season} from "../../core/model/season";


@Component({
  selector: 'app-profile-team',
  templateUrl: './profile-team.component.html',
  styleUrls: ['./profile-team.component.scss']
})
export class ProfileTeamComponent implements OnInit {
  team?: Team;
  season?: Season;
  seasonTeam?: SeasonTeam;
  trainers: Trainer[] = [];
  players: Player[] = [];
  trainer?: Trainer;
  isEditingStarterSquad?: boolean = false;
  averagePointsPerMatch?: number ;


  constructor(private seasonService: SeasonService,private seasonTeamService: SeasonTeamService,
      private route: ActivatedRoute
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
    this.isEditingStarterSquad = !this.isEditingStarterSquad;
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
        // this.seasonTeamService.getSeasonTeam("2",this.team.id).subscribe(seasonTeam =>{
        //   this.seasonTeam = seasonTeam;
        //   console.log(this.seasonTeam);
        // }),
        console.log(this.team.id);
        this.seasonService.getById('2').subscribe(season =>{
          this.season = season;
        })
       this.seasonTeamService.getBySeasonAndTeam('2',this.team.id).subscribe(seasonTeam => {
         this.seasonTeam = seasonTeam;
         console.log(this.seasonTeam);
         if (this.seasonTeam && this.seasonTeam.matches > 0) {
           this.averagePointsPerMatch = this.seasonTeam.points/this.seasonTeam.matches;
         } else {
           this.averagePointsPerMatch = 0;
         }
         console.log(this.averagePointsPerMatch);
       }, error => {
       });
        this.trainerService.findByTeam(this.team.id).subscribe(trainers => {
          this.trainers = trainers;
        }, error => {

        });

        this.playerService.findByTeam(this.team.id).subscribe(players => {
          this.players = players;
          console.log(this.players);
        }, error => {

        });
      });

    });
  }

  toggleStarterStatus(player: Player) {

    const playerStarterUpdate = new PlayerStarter(!player.starter);

    this.playerService.updateStarter(playerStarterUpdate, player.id).subscribe({
      next: (updatedPlayer) => {
        player.starter = updatedPlayer.starter;
      },
      error: (error) => {
        console.error('An error occurred while updating the starter status', error);
        player.starter = !player.starter;
      }
    });
  }

  // private loadSeasonTeams() {
  //   this.seasonTeamService.getSeasonTeam("2",this.team.id)
  // }
}
