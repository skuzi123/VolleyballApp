import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Player} from "../model/player";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url: string = 'http://localhost:8081/players'
  players$: Observable<Player[]> = this.http.get<Player[]>(
    this.url,
    {}
  );

  constructor(private http: HttpClient) {
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }

  getById(id: string): Observable<Player> {
    return this.http.get<Player>(this.url + `/${id}`);
  }

  findByTeam(teamId: string): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}/team/${teamId}`);
  }

  findByName(name: string): Observable<Player> {
    return this.http.get<Player>(`${this.url}/name/${name}`);
  }

  findBySurname(surname: string): Observable<Player> {
    return this.http.get<Player>(`${this.url}/surname/${surname}`);
  }

  addPlayer(player: Player): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.post(this.url, player, {
        observe: 'response'
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  updatePlayer(player: Player): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.put(this.url + `/${player.id}`, player, {
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
