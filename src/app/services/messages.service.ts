import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }
  
  getMessages(): Observable<Object> {
    return this.http.get('http://localhost:3000/users');
  }

  getMessage(id: string): Observable<Object> {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

  createMessage(user): Observable<Object> {
    return this.http.post(`http://localhost:3000/users/`, {
      name: user.name,
      lastName: user.lastName,
      age: user.age
    });
  }
}
