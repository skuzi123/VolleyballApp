import {Component, OnInit} from '@angular/core';
import {Player} from "../../core/model/player";
import {Trainer} from "../../core/model/trainer";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../../core/services/player-service";
import {TeamService} from "../../core/services/team-service";
import {TrainerService} from "../../core/services/trainer-service";
import {User} from "../../core/model/user";
import {UserService} from "../../core/services/user-service";
import {TokenStorageService} from "../../core/services/token-storage.service";
import {Team} from "../../core/model/team";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  player?: Player;
  trainer?: Trainer;
  user?: User;
  team?: Team;
  teamId:string  = "";
  constructor( private teamService: TeamService, private playerService: PlayerService, private trainerService: TrainerService, private userService: UserService, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    const userId = this.tokenStorageService.getUserId();
    const role = this.tokenStorageService.getRole();
    console.log(role);
    const token = this.tokenStorageService.getToken();
    console.log(token);
    this.userService.getById(userId).subscribe(user => {
      this.user = user;
      console.log(userId);

      if (user.role === "TRAINER") {
        console.log(userId);
        this.trainerService.findByUser(userId).subscribe(trainer => {
          console.log(userId);
          this.trainer = trainer;
          console.log(trainer);
          this.fetchTeamData(trainer.teamId);
        });
      }
      if (user.role === "PLAYER") {
        this.playerService.getById(userId).subscribe(player => {
          this.player = player;
          this.fetchTeamData(player.teamId);
        });
      }

    }, error => {
      // Handle error
    });
  }

  private fetchTeamData(teamId: string) {
    this.teamService.getById(teamId).subscribe(team => {
      this.team = team;
    }, error => {
      // Handle error
    });
  }

  // ngOnInit(): void {
  //
  //   this.userService.getById(this.tokenStorageService.getUserId()).subscribe(user => {
  //     this.user = user; // Sto
  //     // re the team information
  //     console.log(this.tokenStorageService.getUserId());
  //     if( this.user.role == "PLAYER"){
  //       this.playerService.getById(this.tokenStorageService.getUserId()).subscribe(player =>{
  //         this.player = player;
  //         this.teamId = player.teamId;
  //       })
  //     }
  //   else if( this.user.role == "TRAINER"){
  //       this.trainerService.getById(this.tokenStorageService.getUserId()).subscribe(trainer =>{
  //         this.trainer = trainer;
  //         this.teamId = trainer.teamId;
  //       })
  //     }
  //   }, error => {
  //
  //   });
  //   this.teamService.getById(this.teamId).subscribe(team =>{
  //     this.team = team;
  //   })
  // }

}
