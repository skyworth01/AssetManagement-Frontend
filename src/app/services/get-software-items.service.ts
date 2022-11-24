import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetSoftwareItemsService {

  constructor(private http: HttpClient) {};

  getData(page:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe:'response' as 'response' 
  };
    return this.http.get(`http://localhost:8080/asset?page=${page}&size=10`);
  }
}
