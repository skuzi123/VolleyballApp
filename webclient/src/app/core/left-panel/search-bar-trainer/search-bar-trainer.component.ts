import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {TrainerService} from "../../services/trainer-service";
import {UserService} from "../../services/user-service";
import {SearchService} from "../../services/search-service";


@Component({
  selector: 'app-search-bar-trainer',
  templateUrl: './search-bar-trainer.component.html',
  styleUrls: ['./search-bar-trainer.component.scss']
})
export class SearchBarTrainerComponent implements OnInit{
  @Input() placeholder: string = 'Wpisz coś...';
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  searchValue = '';
  constructor(private router: Router, private trainerService: TrainerService,private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onSearch() {
  this.trainerService.findBySurname(this.searchTerm).subscribe(
      (trainer) => {
        this.router.navigate(['/trainer',trainer.surname]);
      },
      (error) => {

      }
    );
    this.searchTermChange.emit(this.searchTerm);
    // this.userService.getById(this.searchTerm).subscribe(
    //   (user) => {
    // if(user.role === ERole.TRAINER){
    //   this.router.navigate(['/trainer', user.id]);
    // }
    //   },
    //   (error) => {
    //
    //   }
    // );
  }
  onSearchChange(): void {
    this.searchService.setSearchValue(this.searchValue);
  }

}
