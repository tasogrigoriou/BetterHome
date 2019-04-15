import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /*** Login User ***/
  loginUser(userData): Observable<any> {
    return this.http.post(apiUrl, userData, httpOptions).pipe(
      catchError(this.handleError)
    );
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

export class LoginUser {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  // favoriteListings: Listing[];
}

export class Listing {
  listingId: number;
  title: string;
  listingType: string;
  price: number;
  city: string;
  zipCode: string;
  street: string;
  forSale: boolean;
  numBedrooms: number;
  numBathrooms: number;
}