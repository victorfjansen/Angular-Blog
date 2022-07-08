import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, EMPTY, map, Observable, retry } from 'rxjs';
import { Comments } from 'src/utils/interfaces/Comments';
import { News } from 'src/utils/interfaces/News';
import { NotifierService } from './components/helpers/notifyer/notifyer.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl:string = 'http://localhost:3001/'
  constructor(private http: HttpClient, private notifierService: NotifierService) { }

  showNotifier(type:string, message: string) {
    this.notifierService.callNotifier(type, message)
  }

  handleError(e: any): Observable<any> {
    this.showNotifier("danger", "Ops! Algo deu errado! Verifiqe sua internet e tente novamente!")
    return EMPTY
  }

  // news ----------------------------------------------------------------------------
  getNews(): Observable<News[]> {
        return this.http.get<News[]>(`${this.baseUrl}news`).pipe(
          map(obj => obj),
          catchError(e => this.handleError(e)),
          retry(5)        )
  }

  getNewsById(id:number): Observable<News> {
    return this.http.get<News>(`${this.baseUrl}news/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  //comments -------------------------------------------------------------------------
  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>(`${this.baseUrl}comments`).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  createComment(comment: Comments): Observable<Comments> {
    console.log(comment)
    return this.http.post<Comments>(`${this.baseUrl}comments`, comment).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  deleteComment(id:number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}comments/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  getCommentById(id:number): Observable<Comments> {
    return this.http.get<Comments>(`${this.baseUrl}comments/id`).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  updateComment(id:number, comment: Comments): Observable<Comments> {
    return this.http.put<Comments>(`${this.baseUrl}comments/${id}`, comment).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }
  
}
