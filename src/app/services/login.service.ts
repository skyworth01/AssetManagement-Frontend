import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  constructor(private http: HttpClient) {};

  getData(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe:'response' as 'response' 
  };
    return this.http.post('http://localhost:8080/login',user,httpOptions);
  }
}
