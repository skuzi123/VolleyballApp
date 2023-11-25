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
import {EditProfileDialogComponent} from "../edit-profile-dialog/edit-profile-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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
  constructor( private teamService: TeamService, private playerService: PlayerService, private trainerService: TrainerService, private userService: UserService, private tokenStorageService: TokenStorageService, public dialog: MatDialog) {
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
    });
  }

  private fetchTeamData(teamId: string) {
    this.teamService.getById(teamId).subscribe(team => {
      this.team = team;
    }, error => {
    });
  }

  editProfile() {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '35%',
      height: '70%',
    });

    dialogRef.componentInstance.userId = this.getUserId();

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      window.location.reload();
    });
  }
  getUserId() {
    const token = window.localStorage.getItem('auth-user');

    return token ? JSON.parse(token).id : [];
  }

  getRole() {
    const token = window.localStorage.getItem('auth-user');

    return token ? JSON.parse(token).role : [];
  }

}
