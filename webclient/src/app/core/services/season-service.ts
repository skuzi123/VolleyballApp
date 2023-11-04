import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Season} from "../model/season";

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  url: string = 'http://localhost:8081/seasons'
  seasons$: Observable<Season[]> = this.http.get<Season[]>(
    this.url,
    {}
  );

  constructor(private http: HttpClient) {
  }

  getSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(this.url);
  }

  getById(id: string): Observable<Season> {
    return this.http.get<Season>(this.url + `/${id}`);
  }


  addSeason(season: Season): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.post(this.url, Season, {
        observe: 'response'
      });
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  updateSeason(season: Season): Observable<HttpResponse<Object>> {
    let response: Observable<HttpResponse<Object>>;
    try {
      response = this.http.put(this.url + `/${season.id}`, Season, {
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
