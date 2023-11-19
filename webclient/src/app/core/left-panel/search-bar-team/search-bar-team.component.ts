import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {TeamService} from "../../services/team-service";
import {SearchService} from "../../services/search-service";

@Component({
  selector: 'app-search-bar-team',
  templateUrl: './search-bar-team.component.html',
  styleUrls: ['./search-bar-team.component.scss']
})
export class SearchBarTeamComponent implements OnInit {
  @Input() placeholder: string = 'Wpisz coś...';
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  searchValue = '';

  constructor(private router: Router, private teamService: TeamService, private searchService: SearchService) {
  }

  ngOnInit(): void {
  }

  onSearch() {

    this.teamService.getByTeamName(this.searchTerm).subscribe(
      (team) => {
        this.router.navigate(['/team', team.teamName]);
      },
      (error) => {

      }
    );
    this.searchTermChange.emit(this.searchTerm);
  }

  onSearchChange(): void {
    this.searchService.setSearchValue(this.searchValue);
  }

}
