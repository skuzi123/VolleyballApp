import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../core/services/user-service";
import {PlayerService} from "../../core/services/player-service";
import {TrainerService} from "../../core/services/trainer-service";
import {ERole} from "../../core/model/user";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Player} from "../../core/model/player";
import {Trainer} from "../../core/model/trainer";

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent {
  userId!: string;
  role!: ERole;
  isPlayer: boolean = false;
  isTrainer: boolean = false;

  playerForm!: FormGroup;
  trainerForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditProfileDialogComponent>, private userService: UserService, private playerService: PlayerService, private trainerService: TrainerService,
              //
              @Inject(MAT_DIALOG_DATA) public data: { player?: Player, trainer?: Trainer }) {
  }

  ngOnInit(): void {
    this.loadUserRole();
    if (this.data.player) {
      this.playerForm = this.fb.group({
        name: [this.data.player.name],
        surname: [this.data.player.surname],
        age: [this.data.player.age],
        experience: [this.data.player.experience],
        position: [this.data.player.position],
        height: [this.data.player.height],
        weight: [this.data.player.weight],
        attackRange: [this.data.player.attackRange],
        blockRange: [this.data.player.blockRange],
      })
    } else if (this.data.trainer) {
      this.trainerForm = this.fb.group({
        name: [this.data.trainer.name],
        surname: [this.data.trainer.surname],
        age: [this.data.trainer.age],
        workHistory: [this.data.trainer.workHistory],
        achievements: [this.data.trainer.achievements],
      })
    }
  }

  loadUserRole(): void {
    const authUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    if (authUser && authUser.roles.includes('PLAYER')) {
      this.isPlayer = true;
      this.isTrainer = false;
    } else if (authUser && authUser.roles.includes('TRAINER')) {
      this.isPlayer = false;
      this.isTrainer = true;
    }
  }

  getUserId(): void {
    const authUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userId = authUser.id;
  }

  onSubmit(): void {
    if (this.data.player && this.isPlayer) {
      const playerData = {...this.data.player, ...this.playerForm.value};
      this.playerService.updatePlayer(playerData, this.data.player.id).subscribe({
        next: (updatedPlayer) => {
          this.dialogRef.close(updatedPlayer);
        },
        error: (error) => {
          console.error('Error updating player:', error);
        }
      });
    } else if (this.data.trainer && this.isTrainer) {
      const trainerData = {...this.data.trainer, ...this.trainerForm.value};
      this.trainerService.updateTrainer(trainerData, this.data.trainer.id).subscribe({
        next: (updatedTrainer) => {
          this.dialogRef.close(updatedTrainer);
        },
        error: (error) => {
          console.error('Error updating trainer:', error);
        }
      });
    }

  }


}
