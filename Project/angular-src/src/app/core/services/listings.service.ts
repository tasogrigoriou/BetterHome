import { Injectable } from '@angular/core';
import {Observable, throwError, zip} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {LoginUser} from "./login.service";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/listing';

@Injectable()
export class ListingsService {

  public static cloudStorage = 'https://storage.googleapis.com/better-home-234220';

  constructor(private http: HttpClient) { }

  /** CRUD function for create **/
  createListing(listing: Listing): Observable<any> {
    return this.http.post(apiUrl, listing, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getSingleListing(listingId: number): Observable<any> {
    return this.http.get(apiUrl + `/${listingId}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateListing(listing: Listing): Observable<any> {
    return this.http.put(apiUrl + `/${listing.listingId}`, listing, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getUserListings(userId: number): Observable<any> {
    return this.http.get(apiUrl + '/user/listings', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'userId': String(userId)
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  deleteListing(listingId: number): Observable<any> {
    return this.http.delete(apiUrl + `/${listingId}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteImage(imageUrl: string): Observable<any> {
    console.log(imageUrl);
    return this.http.delete(apiUrl + `/image/${imageUrl}`, httpOptions).pipe(
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

export class Listing {
  constructor(
    public listingId: number = null,
    public title: string = '',
    public listingType: string = '',
    public price: number = null,
    public city: string = '',
    public state: string = '',
    public zipCode: number = null,
    public street: string = '',
    public forSale: boolean = null,
    public numBedrooms: number = null,
    public numBathrooms: number = null,
    public imageUrls: string[] = [],
    public laundry: boolean = false,
    public hospitalAccess: boolean = false,
    public BARTAccess: boolean = false,
    public wheelchairAccess: boolean = false,
    public lotSize: number = null,
    public description: string = '',
    public user: LoginUser = null,
    public isFavorite: boolean = false
  ) {}
}
