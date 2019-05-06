import { Injectable } from '@angular/core';
import {Observable, throwError, zip} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) { }

  getFavorites(userId: number): Observable<any> {
    return this.http.get(apiUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'userId': String(userId)
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  isFavorite(listingId: number, userId: number): Observable<any> {
    return this.http.get(apiUrl + `/${listingId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'userId': String(userId)
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  addFavorite(listingId: number, userId: number): Observable<any> {
    let body = {
      userId: userId,
      listingId: listingId
    };
    return this.http.post(apiUrl, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  removeFavorite(listingId: number, userId: number): Observable<any> {
    return this.http.delete(apiUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'userId': String(userId),
        'listingId': String(listingId)
      })
    }).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
