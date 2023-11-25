import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Player} from "../model/player";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Trainer} from "../model/trainer";

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
  // updateProfile(form: any, userId: string): Observable<HttpResponse<any>> {
  //   return this.http.put<any>(this.url + `/${userId}`, form, { observe: 'response' });
  // }
  updateProfile(trainerForm: any, userId: string): Observable<HttpResponse<any>> {
    return this.http.put<any>(`${this.url}/profile/${userId}`, {
      // tutaj mapujesz pola z 'form' na odpowiednie pola w żądaniu PUT
      age: trainerForm.age,
      experience: trainerForm.experience,
      position: trainerForm.position,
      height: trainerForm.height,
      weight: trainerForm.weight,
      spikeReach: trainerForm.spikeReach,
      blockReach: trainerForm.blockReach,
      // dodaj więcej pól według potrzeb
    }, { observe: 'response' });
  }

  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }


}
