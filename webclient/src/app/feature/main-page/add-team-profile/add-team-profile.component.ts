import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TeamService} from "../../../core/services/team-service";
import {Team} from "../../../core/model/team";

@Component({
  selector: 'app-add-team-profile',
  templateUrl: './add-team-profile.component.html',
  styleUrls: ['./add-team-profile.component.scss']
})
export class AddTeamProfileComponent{
  teamForm!: FormGroup;
  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddTeamProfileComponent>,
              private teamService: TeamService) {
    this.createForm();
  }


  onSubmit() {
    if(this.teamForm.valid){
      const team = new Team(
        this.teamForm.value.teamName,
        this.teamForm.value.image
      )

      this.teamService.addTeam(team).subscribe({
        next:(resp)=>{
          this.dialogRef.close(team)
        },
        error: (err) => {
          console.error(err);

        }
      })
    }
  }

  createForm() {
    this.teamForm = this.fb.group({
      teamName:['', Validators.required],
      image:['', Validators.required]
    })
  }
}
