import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoftwareService {
  constructor(private http: HttpClient) {}

  getData(page: number): Observable<any> {
    return this.http.get(`http://localhost:8080/asset?page=${page}&size=10`);
  }

  getSearchData(page:number,searchTerm:String): Observable<any> {
    return this.http.get(`http://localhost:8080/asset/search?page=${page}&size=10&searchTerm=${searchTerm}`);
  }


  postData(data:any): Observable<any>{
    return this.http.post('http://localhost:8080/asset',data);
  }

}
