import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserRole} from "../enums/user-role";


const AUTH_API = 'http://localhost:8081/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null = localStorage.getItem('token');
  sub: string =
    this.token && !this.jwtService.isTokenExpired(this.token)
      ? this.jwtService.decodeToken(this.token).sub
      : '';
  private messageSource = new BehaviorSubject(this.sub);
  currentMessage$ = this.messageSource.asObservable();

  public redirectUrl: string | undefined;

  sendMessage(message: string) {
    this.messageSource.next(message);
  }

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtService.isTokenExpired(token);
  }

  // public getUser(): Observable<User>{
  //   return this.http.get<User>(AUTH_API + 'user')
  // }

  public login(
    username: string,
    password: string
  ): Observable<HttpResponse<any>> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      {
        observe: 'response',
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }

  public register(
    username: string,
    password: string,
    role: UserRole
  ): Observable<HttpResponse<any>> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        password,
        role
      },
      {
        observe: 'response',
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }
    );
  }
}
