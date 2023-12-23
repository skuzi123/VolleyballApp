import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Player} from "../model/player";
import {HttpClient} from "@angular/common/http";
import {PlayerProfile} from "../model/player-profile";
import {PlayerStarter} from "../model/player-starter";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url: string = 'http://localhost:8081/api/auth/players'
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

  findByUser(userId: string): Observable<Player> {
    return this.http.get<Player>(`${this.url}/user/${userId}`);

  }

  addPlayer(player: Player): Observable<Player> {
    const request = {
      age: player.age,
      experience: player.experience,
      position: player.position,
      height: player.height,
      weight: player.weight,
      attackRange: player.attackRange,
      blockRange: player.blockRange,
      image: player.image

    }
    return this.http.post<Player>(`${this.url}`, request);
  }

  updatePlayer(player: PlayerProfile, id: string): Observable<Player> {
    const request = {
      name: player.name,
      surname: player.surname,
      age: player.age,
      experience: player.experience,
      position: player.position,
      height: player.height,
      weight: player.weight,
      attackRange: player.attackRange,
      blockRange: player.blockRange,
      image: player.image

    }
    return this.http.patch<Player>(`${this.url}/${id}`, request);
  }

  updateStarter(player: PlayerStarter, id: string): Observable<Player> {
    const request = {
      starter: player.starter

    }
    return this.http.patch<Player>(`${this.url}/isStarter/${id}`, request);
  }

  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }


}
