import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {PlayerService} from "../../services/player-service";
import {TeamService} from "../../services/team-service";

@Component({
  selector: 'app-search-bar-team',
  templateUrl: './search-bar-team.component.html',
  styleUrls: ['./search-bar-team.component.scss']
})
export class SearchBarTeamComponent implements OnInit{
  @Input() placeholder: string = 'Wpisz coś...';
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  constructor(private router: Router, private teamService: TeamService) { }

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

  }

}
