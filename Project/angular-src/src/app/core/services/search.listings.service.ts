import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Listing} from "../../home/home.component";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/search';

@Injectable({
  providedIn: 'root'
})
export class SearchListingsService {

  constructor(private http: HttpClient) { }

  /*** Get Listings from search query ***/
  getSearchListings(searchQuery): Observable<any> {
    return this.http.post(apiUrl, searchQuery, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  saveSearchListings(listings: Listing[]) {
    localStorage.setItem('searchListings', JSON.stringify(listings));
  }

  getListings(): Listing[] {
    if (localStorage.getItem('searchListings')) {
      return JSON.parse(localStorage.getItem('searchListings'));
    }
    return [];
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
