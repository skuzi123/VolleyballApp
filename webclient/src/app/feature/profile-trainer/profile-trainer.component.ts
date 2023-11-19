import {Component, OnInit} from '@angular/core';
import {Trainer} from "../../core/model/trainer";
import {ActivatedRoute} from "@angular/router";
import {TrainerService} from "../../core/services/trainer-service";
import {TeamService} from "../../core/services/team-service";
import {Team} from "../../core/model/team";


@Component({
  selector: 'app-profile-trainer',
  templateUrl: './profile-trainer.component.html',
  styleUrls: ['./profile-trainer.component.scss']
})
export class ProfileTrainerComponent implements OnInit {
  trainer?: Trainer;
  team?: Team;

  constructor(private route: ActivatedRoute, private trainerService: TrainerService, private teamService: TeamService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const surname = params['surname'];
      this.trainerService.findBySurname(surname).subscribe(trainer => {
        this.trainer = trainer;
        this.teamService.getById(trainer.teamId).subscribe(team => {
          this.team = team; // Store the team information
        }, error => {
          // Handle team fetch error
        });
      }, error => {

      });
    });
  }

}
