import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Team} from "../model/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  url: string = 'http://localhost:8081/api/auth/teams'
  teams$: Observable<Team[]> = this.http.get<Team[]>(
    this.url,
    {}
  );

  constructor(private http: HttpClient) {
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.url);
  }

  getById(id: string): Observable<Team> {
    return this.http.get<Team>(this.url + `/${id}`);
  }
  // getById(teamId: string): Observable<any> {
  //   return this.http.get(`${this.url}/${teamId}`).pipe(
  //     map(response => response as any)
  //   );
  // }

  getByTeamName(teamName: string): Observable<Team> {
    return this.http.get<Team>(this.url + `/teamName/${teamName}`);
  }



  addTeam(team: Team): Observable<Team> {
    const request = {
     teamName: team.teamName
    }
    return this.http.post<Team>(this.url, request);
  }



  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

  deleteByTeamName(teamName: string): Observable<void> {
    return this.http.delete<void>(this.url + `/teamName/${teamName}`);
  }

}
