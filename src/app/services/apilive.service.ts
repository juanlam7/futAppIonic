import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { resolve } from 'url';
import { Data } from '../models/data';
import { Match } from '../models/match';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Jornad } from '../shared';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'livegames';

@Injectable({
  providedIn: 'root'
})
export class ApiliveService {

  base_path = 'http://livescore-api.com/api-client/scores/live.json?key=SXb76HENibIQIGqd&secret=FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco&competition_id=3'

  constructor(private http: HttpClient,
    private storage: Storage) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
    params: new HttpParams().set("key","SXb76HENibIQIGqd").set("secret", "FjQaoDNUM6eEprmhpxpwe3kwf3nYJNco"),
    }
  

  //Handle API Error
  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      //A client-side or network error ocurred
      console.log("An error ocurred:", error.error.message);
    }else{
      //the backend returned an unsuccessful response code
      //the response body may contain clues as to what went wrong
      console.error(
        `Backend returned code ${error.status}` + `Body was: ${error.error}`);
    }
    //Return an observable with user-facing error message
    return throwError(
      'Something bad happened; please try again later');
  };

  //Create a new item
  createItem(item): Observable<Data>{
    return this.http
      .post<Data>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  //get single match data by ID
  getItem(id): Observable<Data> {
    return this.http
    .get<Data>(this.base_path + '/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //get match data
  getList(): Observable<Data> {

    return this.http
    .get<Data>(this.base_path)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Update Item by id
  updateItem(id, item): Observable<Data> {
    return this.http
    .put<Data>(this.base_path + '/' + id,JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  //Delete item by id
  public deleteItem(id) {
    return this.http
    .delete<Data>(this.base_path + '/' + id, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
