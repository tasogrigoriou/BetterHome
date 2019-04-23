import { Injectable } from '@angular/core';
import {Observable, throwError, zip} from "rxjs";
import {catchError} from "rxjs/operators";
import {RegisterUser} from "./register.service";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/register';

@Injectable()
export class ListingsService {

  listing: Listing;

  constructor(private http: HttpClient) { }

  /** CRUD function for create **/
  createListing(listing: Listing): Observable<any> {
    return this.http.post(apiUrl, listing, httpOptions).pipe(
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


  getListings(){
     return[
       // this.exampleListing1,
       // this.exampleListing2,
       // this.exampleListing3


     ];
  }

  getListingById(id: number): Listing {
    let listings = this.getListings();
    for (let i = 0; i < listings.length; i++) {
      if (id == listings[i].Lid) {
        return listings[i];
      }
    }
    return null;
  }

  // public exampleListing1 = new Listing(
  //   69,
  //   0,
  //   'California',
  //   'Sale',
  //   3000,
  //   'San Francisco',
  //   94132,
  //   '4th St',
  //   true,
  //   2,
  //   '2'
  // );
  // public exampleListing2 = new Listing(
  //   70,
  //   0,
  //   'California',
  //   'Sale',
  //   3000,
  //   '2',
  //   94132,
  //   '8th St',
  //   true,
  //   3,
  //   '3'
  // );
  // public exampleListing3 = new Listing(
  //   71,
  //   0,
  //   'California',
  //   'Sale',
  //   3000,
  //   '2',
  //   94132,
  //   '11th St',
  //   false,
  //   3,
  //   '2 1/2'
  // );



}
export class Listing {
  Lid: number;
  DisplayBoard_boardId: number
  title: string;
  listingType: string;
  price: number;
  lotSize: number;
  city: string;
  zipCode: number;
  street: string;
  state: string;
  forSale: boolean;
  numBedrooms: number;
  numBathrooms: string;
  laundry: boolean;
  hospitalAccess: boolean;
  BARTAccess: boolean;
  wheelchairAccess: boolean;

  // constructor(Lid: number, DisplayBoard_boardId: number, title: string, listingType: string, price: number, city: string, zipCode: number,
  //             street: string, forSale: boolean, numBedrooms: number, numBathrooms: string)
  // {
  //   this.Lid = Lid;
  //   this.DisplayBoard_boardId = DisplayBoard_boardId;
  //   this.title = title;
  //   this.listingType = listingType;
  //   this.price = price;
  //   this.city = city;
  //   this.zipCode = zipCode;
  //   this.street = street;
  //   this.forSale = forSale;
  //   this.numBedrooms = numBedrooms;
  //   this.numBathrooms = numBathrooms;
  // }


}

