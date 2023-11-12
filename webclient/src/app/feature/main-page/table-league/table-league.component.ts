import { Component, OnInit } from '@angular/core';
import {Team} from "../../../core/model/team";
import {TeamService} from "../../../core/services/team-service";


@Component({
  selector: 'app-table-league',
  templateUrl: './table-league.component.html',
  styleUrls: ['./table-league.component.scss']
})
export class TableLeagueComponent implements OnInit {
  teams: Team[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getTeams().subscribe((data: Team[]) => { // Type annotation added here
      this.teams = data;
    });
  }
}
