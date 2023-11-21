import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Trainer} from "../model/trainer";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  url: string = 'http://localhost:8081/api/auth/trainers'
  trainers$: Observable<Trainer[]> = this.http.get<Trainer[]>(
    this.url,
    {}
  );

  constructor(private http: HttpClient) {
  }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.url);
  }

  getById(id: string): Observable<Trainer> {
    return this.http.get<Trainer>(this.url + `/${id}`);
  }

  findByUser(userId: string): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.url}/user/${userId}`);

  }
  findByTeam(teamId: string): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.url}/team/${teamId}`);
  }

  findByName(name: string): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.url}/name/${name}`);
  }

  findBySurname(surname: string): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.url}/surname/${surname}`);
  }


  addTrainer(trainer: Trainer): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.post(this.url, Trainer, {
        observe: 'response'
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  updateTrainer(trainer: Trainer): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.put(this.url + `/${trainer.id}`, Trainer, {
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
