import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class NovaPubService {

  baseUrl:string = 'http://localhost:3001/'

  constructor(private http: HttpClient, private globalService: GlobalService) { }

  createPub(pub: any): Observable<any>{
    const url = `${this.baseUrl}news`
    return this.http.post<any>(url, pub).pipe(map(obj => obj), catchError(async e=> this.globalService.showNotifier("error", e)))
  }
}
