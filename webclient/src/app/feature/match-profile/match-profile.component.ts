import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {MatchService} from "../../core/services/match-service";
import {TeamService} from "../../core/services/team-service";
import {Match} from "../../core/model/match";


@Component({
  selector: 'app-match-profile',
  templateUrl: './match-profile.component.html',
  styleUrls: ['./match-profile.component.scss']
})
export class MatchProfileComponent {
  matchForm!: FormGroup;
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<MatchProfileComponent>,
             private matchService: MatchService,
              private teamService: TeamService) {
    this.createForm();
  }

  createForm() {
    this.matchForm = this.fb.group({
      hostTeam: ['', Validators.required],
      guestTeam: ['', Validators.required],
      matchDate: ['', Validators.required],
      result: ['', Validators.required]
    })
  }

  onSubmit() {
if(this.matchForm.valid){
  this.teamService.getByTeamName(this.matchForm.value.hostTeam).subscribe(homeTeam => {
    const homeTeamId = homeTeam.id;
    this.teamService.getByTeamName(this.matchForm.value.guestTeam).subscribe(guestTeam => {
      const guestTeamId = guestTeam.id;

      const match = new Match(
        homeTeamId,
        guestTeamId,
        this.matchForm.value.matchDate,
        this.matchForm.value.result
      )

      this.matchService.addMatch(match).subscribe({
        next: (resp) => {
          this.dialogRef.close(match);
        },
        error: (err) => {
          console.error(err);

        }
      })
    });


  });


}
  }
}
