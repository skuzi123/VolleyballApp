import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Set} from "../model/set";

@Injectable({
  providedIn: 'root'
})
export class SetService {
  url: string = 'http://localhost:8081/sets'
  sets$: Observable<Set[]> = this.http.get<Set[]>(
    this.url,
    {}
  );

  constructor(private http: HttpClient) {
  }

  getSets(): Observable<Set[]> {
    return this.http.get<Set[]>(this.url);
  }

  getById(id: string): Observable<Set> {
    return this.http.get<Set>(this.url + `/${id}`);
  }

  getByMatchId(matchId: string): Observable<Set> {
    return this.http.get<Set>(`${this.url}/match/{matchId}`);
  }


  addSet(set: Set): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.post(this.url, Set, {
        observe: 'response'
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  updateSet(set: Set): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.put(this.url + `/${set.id}`, Set, {
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
