import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserRole} from "../enums/user-role";
import {User} from "../model/user";

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

  public getUser(): Observable<User> {
    return this.http.get<User>(AUTH_API + 'user')
  }
  getCurrentUserId(): string | null {
    // Assuming the user's ID is stored in local storage after login
    return localStorage.getItem('id');
  }
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
  // W AuthService
  // public login(username: string, password: string): Observable<HttpResponse<User>> {
  //   return this.http.post<User>(
  //     AUTH_API + 'signin',
  //     {
  //       username,
  //       password,
  //     },
  //     { observe: 'response' }
  //   );
  // }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private saveUserDetails(decodedToken: any): void {
    localStorage.setItem('id', decodedToken.id);
    localStorage.setItem('username', decodedToken.sub); // 'sub' jest standardowym polem JWT dla nazwy użytkownika
    localStorage.setItem('roles', JSON.stringify(decodedToken.roles));
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
