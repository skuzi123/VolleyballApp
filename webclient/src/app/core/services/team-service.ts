import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
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


  addTeam(team: Team): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.post(this.url, Team, {
        observe: 'response'
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  updateTeam(team: Team): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.put(this.url + `/${team.id}`, Team, {
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

}
