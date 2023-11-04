// season-team-service.ts
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SeasonTeam} from "../model/seasonteam";

@Injectable({
  providedIn: 'root'
})
export class SeasonTeamService {
  private url: string = 'http://localhost:8081/seasonteams';

  constructor(private http: HttpClient) {
  }

  getAllSeasonTeams(): Observable<SeasonTeam[]> {
    return this.http.get<SeasonTeam[]>(this.url);
  }

  getSeasonTeam(seasonId: string, teamId: string): Observable<SeasonTeam> {
    return this.http.get<SeasonTeam>(`${this.url}/${seasonId}/${teamId}`);
  }

  addSeasonTeam(seasonTeam: SeasonTeam): Observable<HttpResponse<Object>> {
    return this.http.post<HttpResponse<Object>>(this.url, seasonTeam, {observe: 'response'});
  }

  updateSeasonTeam(seasonTeam: SeasonTeam): Observable<HttpResponse<Object>> {
    const {seasonId, teamId} = seasonTeam.id;
    return this.http.put<HttpResponse<Object>>(`${this.url}/${seasonId}/${teamId}`, seasonTeam, {observe: 'response'});
  }

  deleteSeasonTeam(seasonId: string, teamId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${seasonId}/${teamId}`);
  }
}
