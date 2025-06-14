import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; 
  private authState = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.authState.asObservable();

  constructor(private http: HttpClient) { 
    const token = localStorage.getItem('token');
    this.authState.next(!!token);
  }

  login(username: string, password: string): Observable<String> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const token = users[0].token;
          localStorage.setItem('token', token);
          this.authState.next(true);
          return token; // observable<string> döner
        } else {
          throw new Error('Geçersiz kullanıcı adı veya şifre');
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authState.next(false);
  }

}
