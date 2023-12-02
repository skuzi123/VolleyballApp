import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Team} from "../../../core/model/team";
import {Set} from "../../../core/model/set";
import {TeamService} from "../../../core/services/team-service";
import {MatDialog} from "@angular/material/dialog";
import {EditTableLeagueComponent} from "../edit-table-league/edit-table-league.component";
import {AddTeamProfileComponent} from "../add-team-profile/add-team-profile.component";
import {DeleteTeamProfileComponent} from "../delete-team-profile/delete-team-profile.component";
import {SeasonTeam} from "../../../core/model/seasonteam";
import {SeasonTeamService} from "../../../core/services/seasonteam-service";
import {Match} from "../../../core/model/match";
import {MatchService} from "../../../core/services/match-service";
import {SetService} from "../../../core/services/set-service";

interface LeagueTableRow {
  team: Team; // Zakładam, że Team jest typem lub interfejsem zdefiniowanym gdzie indziej
  wins: number;
  losses: number;
  points: number;
}
@Component({
  selector: 'app-table-league',
  templateUrl: './table-league.component.html',
  styleUrls: ['./table-league.component.scss']
})
export class TableLeagueComponent implements OnInit {
  teams: Team[] = [];
  matches: Match[] = [];
  sets: Set[] = [];
  seasonTeams: SeasonTeam[] = [];
  tableLeague: LeagueTableRow[] = [];
  constructor(private teamService: TeamService,
              private seasonTeamService: SeasonTeamService,
              private matchService: MatchService,
              private setService: SetService,
              private dialog: MatDialog,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    Promise.all([
      this.loadTeams(),
      this.loadSeasonTeams(),
      this.loadMatches(),
      this.loadSets(),
    ]).then(() => {
      this.tableLeague = this.calculateTable();
      this.cdr.detectChanges();
    });
  }
  calculateTable(): LeagueTableRow[] {
    const results: { [teamId: string]: LeagueTableRow } = {};

    // Inicjalizacja wyników dla każdej drużyny
    this.teams.forEach(team => {
      results[team.id] = { team: team, wins: 0, losses: 0, points: 0 };
    });

    // Przetwarzanie wyników meczów
    this.matches.forEach(match => {
      // Załóżmy, że wyniki meczów są w formacie "3:0", "3:1", itd.
      const [hostScore, guestScore] = match.result.split(':').map(Number);
      const hostResult = results[match.hostTeamId];
      const guestResult = results[match.guestTeamId];

      if (hostScore > guestScore) {
        // Host wygrywa mecz
        hostResult.wins += 1;
        guestResult.losses += 1;
        hostResult.points += hostScore === 3 ? 3 : 2; // 3 punkty za wygrane 3:0 lub 3:1, 2 punkty za wygrane 3:2
        if (guestScore === 2) guestResult.points += 1; // 1 punkt za przegraną 2:3
      } else {
        // Gość wygrywa mecz
        guestResult.wins += 1;
        hostResult.losses += 1;
        guestResult.points += guestScore === 3 ? 3 : 2; // 3 punkty za wygrane 3:0 lub 3:1, 2 punkty za wygrane 3:2
        if (hostScore === 2) hostResult.points += 1; // 1 punkt za przegraną 2:3
      }
    });

    // Konwersja wyników na tablicę i sortowanie
    const leagueTableArray = Object.values(results);
    leagueTableArray.sort((a, b) => b.points - a.points || b.wins - a.wins);

    return leagueTableArray;
  }

  getMatchResult(matchId: string): string {
    const match = this.matches.find(m => m.id === matchId);
    if (match) {
      // console.log(match.result as string);
      return match.result as string;
    } else {
      console.error(`Match with ID ${matchId} not found!`);
      return '';
    }
  }

  loadTeams(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.teamService.getTeams().subscribe((data: Team[]) => {
        this.teams = data;
        resolve();
      }, error => reject(error));
    });
  }

  loadMatches(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.matchService.getMatches().subscribe((data: Match[]) => {
        this.matches = data;
        resolve();
      }, error => reject(error));
    });
  }

  loadSets(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.setService.getSets().subscribe((data: Set[]) => {
        this.sets = data;
        resolve();
      }, error => reject(error));
    });
  }
  loadSeasonTeams(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.seasonTeamService.getAllSeasonTeams().subscribe(
        (data) => {
          this.seasonTeams = data;
        resolve();
      }, error => reject(error));
    });

  }
  isAdmin() : boolean{
    const authUser = localStorage.getItem('auth-user');
    if (authUser) {
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
