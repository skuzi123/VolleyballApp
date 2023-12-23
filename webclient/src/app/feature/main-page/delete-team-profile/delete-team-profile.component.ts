import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TeamService} from "../../../core/services/team-service";
import {Team} from "../../../core/model/team";

@Component({
  selector: 'app-delete-team-profile',
  templateUrl: './delete-team-profile.component.html',
  styleUrls: ['./delete-team-profile.component.scss']
})
export class DeleteTeamProfileComponent{


  teamForm!: FormGroup;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<DeleteTeamProfileComponent>,
              private teamService: TeamService) {
    this.createForm();
  }

  onSubmit() {
    if(this.teamForm.valid){
      const teamName = this.teamForm.value.teamName
      this.teamService.deleteByTeamName(teamName).subscribe({
        next:(resp)=>{
          this.dialogRef.close(teamName)
        },
        error: (err) => {
          console.error(err);

        }
      })
    }
  }



  createForm() {
    this.teamForm = this.fb.group({
      teamName:['', Validators.required]
    })
  }
}
