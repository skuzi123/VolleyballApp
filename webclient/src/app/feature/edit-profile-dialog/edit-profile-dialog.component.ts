import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../core/services/user-service";
import {PlayerService} from "../../core/services/player-service";
import {TrainerService} from "../../core/services/trainer-service";
import {ERole} from "../../core/model/user";

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
  isProfileUpdated: boolean = false;

  // playerForm = this.fb.group({
  //   age: new FormControl(null, {validators: [Validators.required]}),
  //   experience: new FormControl('', {validators: [Validators.required]}),
  //   position: new FormControl('', {validators: [Validators.required]}),
  //   height: new FormControl(null, {validators: [Validators.required]}),
  //   weight: new FormControl(null, {validators: [Validators.required]}),
  //   spikeReach: new FormControl(null, {validators: [Validators.required]}),
  //   blockReach: new FormControl(null, {validators: [Validators.required]})
  // })
  //
  // trainerForm = this.fb.group({
  //   age: new FormControl(null, {validators: [Validators.required]}),
  //   workHistory: new FormControl('', {validators: [Validators.required]}),
  //   achievement: new FormControl('', {validators: [Validators.required]})
  // })

  playerForm: any = {
    age: null,
    experience: null,
    position: null,
    height: null,
    weight: null,
    spikeReach: null,
    blockReach: null
  };

  trainerForm: any = {
    age: null,
    workHistory: null,
    achievement: null
  };


  constructor( private fb: FormBuilder,private userService: UserService, private playerService: PlayerService, private trainerService: TrainerService) {
  }
  ngOnInit(): void {
    this.loadUserRole();
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
    // Ustaw pozostałe flagi i logikę zależnie od struktury ról
  }

  // editProfile(role: ERole, trainerForm?: FormGroup, playerForm?: FormGroup): void {
  //   console.log(this.isTrainer);
  //   console.log(this.isPlayer);
  //   if (role === "PLAYER" && playerForm) {
  //     this.isPlayer = true;
  //     const playerData = playerForm.value;
  //     this.playerService.updateProfile(playerForm.value).subscribe();
  //   } else if (role === "TRAINER" && trainerForm) {
  //     this.isTrainer = true;
  //     const trainerData = trainerForm.value;
  //     this.trainerService.updateProfile(trainerData).subscribe();
  //   } else {
  //     // Handle invalid role or missing form data
  //   }
  // }
  getUserId(): void {
    const authUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userId = authUser.id; // lub odpowiedni klucz, jeśli jest inny
  }
  editProfile(): void {
    if (this.isPlayer) {
      this.playerService.updateProfile(this.playerForm, this.userId).subscribe({
        next: (response) => {
          // Obsługa sukcesu
        },
        error: (error) => {
          // Obsługa błędu
        }
      });
    } else if (this.isTrainer) {
      this.trainerService.updateProfile(this.trainerForm, this.userId).subscribe({
        next: (response) => {
          // Obsługa sukcesu
        },
        error: (error) => {
          // Obsługa błędu
        }
      });
    }
  }
  // editProfile(): void {
  //   if (this.isPlayer && this.playerForm.valid) {
  //     this.playerService.findByUser(this.userId).subscribe({
  //       next: (playerDto) => {
  //         this.playerService.updateProfile({ ...this.playerForm.value, id: playerDto.id }).subscribe({
  //           next: (response) => {
  //             console.log('Player profile updated:', response);
  //             // Logika po zaktualizowaniu profilu gracza
  //           },
  //           error: (error) => {
  //             console.error('Error updating player profile:', error);
  //           }
  //         });
  //       },
  //       error: (error) => {
  //         console.error('Error finding player by user ID:', error);
  //       }
  //     });
  //   } else if (this.isTrainer && this.trainerForm.valid) {
  //     this.trainerService.findByUser(this.userId).subscribe({
  //       next: (trainerDto) => {
  //         this.trainerService.updateProfile({ ...this.trainerForm.value, id: trainerDto.id }).subscribe({
  //           next: (response) => {
  //             console.log('Trainer profile updated:', response);
  //             // Logika po zaktualizowaniu profilu trenera
  //           },
  //           error: (error) => {
  //             console.error('Error updating trainer profile:', error);
  //           }
  //         });
  //       },
  //       error: (error) => {
  //         console.error('Error finding trainer by user ID:', error);
  //       }
  //     });
  //   } else {
  //     console.error('Invalid role or incomplete form data');
  //   }
  // }

}
