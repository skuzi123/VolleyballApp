import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ID = 'id';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() {
  }

  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUserId(): string {
    const user = window.localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user).id : null;
  }

  public getRole(): string {
    const user = window.localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user).role : null;
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  public removeUser(): void {
    window.localStorage.removeItem(USER_KEY);
  }


  public isLoggedIn(): boolean {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}

// getUserId() {
//   const token = window.localStorage.getItem('auth-user');
//
//   return token ? JSON.parse(token).id : [];
// }
// getRole() {
//   const token = window.localStorage.getItem('auth-user');
//
//   return token ? JSON.parse(token).role : [];
// }
