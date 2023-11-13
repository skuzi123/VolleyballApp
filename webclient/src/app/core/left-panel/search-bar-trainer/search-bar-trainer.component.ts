import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {TrainerService} from "../../services/trainer-service";
import {UserService} from "../../services/user-service";
import {ERole} from "../../model/user";

@Component({
  selector: 'app-search-bar-trainer',
  templateUrl: './search-bar-trainer.component.html',
  styleUrls: ['./search-bar-trainer.component.scss']
})
export class SearchBarTrainerComponent implements OnInit{
  @Input() placeholder: string = 'Wpisz coś...';
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  constructor(private router: Router, private trainerService: TrainerService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSearch() {
    this.userService.getById(this.searchTerm).subscribe(
      (user) => {
    if(user.role === ERole.TRAINER){
      this.router.navigate(['/trainer', user.id]);
    }
      },
      (error) => {

      }
    );
  }

}
