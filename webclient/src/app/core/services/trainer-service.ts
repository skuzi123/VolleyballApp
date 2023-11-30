import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Trainer} from "../model/trainer";
import {HttpClient} from "@angular/common/http";
import {TrainerProfile} from "../model/trainer-profile";

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


  addTrainer(trainer: Trainer): Observable<Trainer> {
    const request = {
      name: trainer.name,
      surname: trainer.surname,
      age: trainer.age,
      workHistory: trainer.workHistory,
      achievements: trainer.achievements

    }
    return this.http.post<Trainer>(`${this.url}`, request);
  }

  updateTrainer(trainer: TrainerProfile, id: string): Observable<Trainer> {
    const request = {
      name: trainer.name,
      surname: trainer.surname,
      age: trainer.age,
      workHistory: trainer.workHistory,
      achievements: trainer.achievements

    }
    return this.http.patch<Trainer>(`${this.url}/${id}`, request);
  }

  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }


}
