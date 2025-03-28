import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Report} from "../model/report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  url: string = 'http://localhost:8081/api/auth/reports'
  reports$: Observable<Report[]> = this.http.get<Report[]>(
    this.url,
    {}
  );

  constructor(private http: HttpClient) {
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.url);
  }

  getById(id: string): Observable<Report> {
    return this.http.get<Report>(this.url + `/${id}`);
  }

  findByCreatedByUser(userId: string): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.url}/user/${userId}`);
  }


  addReport(report: Report): Observable<Report> {

    const request = {
      reportName: report.reportName,
      reportText: report.reportText,
      createdByUserId: report.createdByUserId
    }
    console.log(report);
    return this.http.post<Report>(this.url, request);
  }


  // updateReport(report: Report): Observable<HttpResponse<Object>> {
  //   let response: Observable<HttpResponse<Object>>;
  //   try {
  //     response = this.http.put(this.url + `/${report.id}`, report, {
  //       observe: 'response'
  //     });
  //     return response;
  //   } catch (error: any) {
  //     throw new Error(error.message);
  //   }
  // }

  deleteById(id: string): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

}
