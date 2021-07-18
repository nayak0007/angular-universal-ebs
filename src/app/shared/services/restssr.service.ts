import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestssrService {
  httpHeaderOptions: any;
  constructor(
    private http: HttpClient
  ) {
    this.httpHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*',
      })
    }
  }

  covidIndiaGet(endpoint:string): Observable<any> {
    return this.http.get(environment.COVID_INDIA_API+endpoint);
  }
}
