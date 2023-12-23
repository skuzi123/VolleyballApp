import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Match} from "../model/match";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {TeamService} from "./team-service";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  url: string = 'http://localhost:8081/api/auth/matches'
  matches$: Observable<Match[]> = this.http.get<Match[]>(
    this.url,
    {}
  );

  constructor(private http: HttpClient, private teamService: TeamService) {
  }

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.url);
  }

  getById(id: string): Observable<Match> {
    return this.http.get<Match>(this.url + `/${id}`);
  }

  addMatch(match: Match): Observable<Match> {
    const request = {
      hostTeamId: match.hostTeamId,
      guestTeamId: match.guestTeamId,
      matchDate: match.matchDate,
      result: match.result
    }
    return this.http.post<Match>(this.url, request);
  }

  updateMatch(match: Match): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.put(this.url + `/${match.id}`, match, {
        observe: 'response'
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }


  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

  findByHostTeamOrGuestTeam(hostTeamId: string, guestTeamId: string): Observable<Match[]> {
    return this.http.get<Match[]>(this.url + `/${hostTeamId}/${guestTeamId}`);
  }

}
