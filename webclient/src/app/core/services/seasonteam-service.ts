// season-team-service.ts
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SeasonTeam} from "../model/seasonteam";
import {PlayerProfile} from "../model/player-profile";
import {Player} from "../model/player";
import {SeasonTeamId} from "../model/seasonteamid";

@Injectable({
  providedIn: 'root'
})
export class SeasonTeamService {
  private url: string = 'http://localhost:8081/api/auth/seasonteams';

  constructor(private http: HttpClient) {
  }

  getAllSeasonTeams(): Observable<SeasonTeam[]> {
    return this.http.get<SeasonTeam[]>(this.url);
  }

  getBySeasonAndTeam(seasonId: string, teamId: string): Observable<SeasonTeam> {
    return this.http.get<SeasonTeam>(`${this.url}/${seasonId}/${teamId}`);
  }

  addSeasonTeam(seasonTeam: SeasonTeam): Observable<HttpResponse<Object>> {
    return this.http.post<HttpResponse<Object>>(this.url, seasonTeam, {observe: 'response'});
  }

  updateSeasonTeam(seasonTeam: SeasonTeam,id: string): Observable<SeasonTeam> {
    const request = {
      id: id,
      points: seasonTeam.points,
      matches: seasonTeam.matches,
      seasonId: seasonTeam.seasonId,
      teamId: seasonTeam.teamId

    }
    return this.http.put<SeasonTeam>(`${this.url}/${id}`, request);
  }
  deleteSeasonTeam(seasonId: string, teamId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${seasonId}/${teamId}`);
  }
}
