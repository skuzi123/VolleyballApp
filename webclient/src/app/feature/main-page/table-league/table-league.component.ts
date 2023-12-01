import {Component, OnInit} from '@angular/core';
import {Team} from "../../../core/model/team";
import {TeamService} from "../../../core/services/team-service";
import {MatDialog} from "@angular/material/dialog";
import {EditTableLeagueComponent} from "../edit-table-league/edit-table-league.component";
import {AddTeamProfileComponent} from "../add-team-profile/add-team-profile.component";
import {DeleteTeamProfileComponent} from "../delete-team-profile/delete-team-profile.component";
import {SeasonTeam} from "../../../core/model/seasonteam";
import {SeasonTeamService} from "../../../core/services/seasonteam-service";


@Component({
  selector: 'app-table-league',
  templateUrl: './table-league.component.html',
  styleUrls: ['./table-league.component.scss']
})
export class TableLeagueComponent implements OnInit {
  teams: Team[] = [];
  seasonTeams: SeasonTeam[] = [];
  constructor(private teamService: TeamService,private seasonTeamService: SeasonTeamService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadTeams()
  }
  loadTeams() {
    this.teamService.getTeams().subscribe((data: Team[]) => {
      this.teams = data;
    });
  }
  getSeasonTeams(): void {
    this.seasonTeamService.getAllSeasonTeams().subscribe(
      (data) => {
        this.seasonTeams = data;
        this.sortSeasonTeams();
      },
      (error) => {
        console.error('Error fetching season teams', error);
      }
    );
  }
  isAdmin() : boolean{
    const authUser = localStorage.getItem('auth-user');
    if (authUser) {
      console.log(JSON.parse(authUser).roles)
      return JSON.parse(authUser).roles.includes('ADMIN')
    } else {
      console.error("Can't read role")
      return false;
    }
  }

  openTableToAddTeam() {
    const dialogRef = this.dialog.open(AddTeamProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTeams();
      }
    });
  }
  openTableToDeleteTeam() {
    const dialogRef = this.dialog.open(DeleteTeamProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadTeams();
      }
    });
  }


    sortSeasonTeams(): void {
      this.seasonTeams.sort((a, b) => b.points - a.points);
    }

}
