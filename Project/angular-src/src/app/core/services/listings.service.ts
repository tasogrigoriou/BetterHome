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


  getListings() {
    return [
      this.exampleListing1,
      this.exampleListing2,
      this.exampleListing3,
      this.exampleListing1,
      this.exampleListing2,
      this.exampleListing3
    ];
  }

  getListingById(id: number): Listing {
    let listings = this.getListings();
    for (let i = 0; i < listings.length; i++) {
      if (id == listings[i].listingId) {
        return listings[i];
      }
    }
    return null;
  }

  public exampleListing1 = new Listing(
    69,
    'Example Listing1',
    'House',
    3000,
    'San Francisco',
    'California',
    94132,
    'Example Street 1',
    true,
    2,
    '2',
    ['https://bit.ly/2Vc5oog'],
    false,
    false,
    true,
    true,
    800
  );
  public exampleListing2 = new Listing(
    70,
    'Example Listing2',
    'Apartment',
    10000,
    "San Francisco",
    'California',
    94132,
    'Example Street 2',
    true,
    3,
    '3',
    ['https://bit.ly/2UJTUca'],
    true,
    true,
    false,
    false,
    1000
  );
  public exampleListing3 = new Listing(
    71,
    'Example Listing3',
    'Condo',
    30000,
    "San Francisco",
    'California',
    94132,
    'Example Street 3',
    false,
    3,
    '2.5',
    ['https://bit.ly/2UtC20w'],
    true,
    false,
    true,
    false,
    900
  );
}

export class Listing {
  listingId: number;
  title: string;
  listingType: string;
  price: number;
  city: string;
  state: string;
  zipCode: number;
  street: string;
  forSale: boolean;
  numBedrooms: number;
  numBathrooms: string;
  imageUrls: string[];
  laundry: boolean;
  hospitalAccess: boolean;
  BARTAccess: boolean;
  wheelchairAccess: boolean;
  lotSize: number;
  description: string;

  constructor(
    listingId: number = null,
    title: string = '',
    listingType: string = '',
    price: number = null,
    city: string = '',
    state:string = '',
    zipCode: number = null,
    street: string = '',
    forSale: boolean = null,
    numBedrooms: number = null,
    numBathrooms: string = '',
    imageUrls: string[] = [],
    laundry: boolean = null,
    hospitalAccess: boolean = false,
    BARTAccess: boolean = false,
    wheelchairAccess: boolean = false,
    lotSize: number = null,
    description: string = ''
  ) {
    this.listingId = listingId;
    this.title = title;
    this.listingType = listingType;
    this.price = price;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.street = street;
    this.forSale = forSale;
    this.numBedrooms = numBedrooms;
    this.numBathrooms = numBathrooms;
    this.imageUrls = imageUrls;
    this.laundry = laundry;
    this.hospitalAccess = hospitalAccess;
    this.BARTAccess = BARTAccess;
    this.wheelchairAccess = wheelchairAccess;
    this.lotSize = lotSize;
    this.description = description;
  }
}

export interface Listing2 {
  listingId: number;
  title: string;
  listingType: string;
  price: number;
  city: string;
  state: string;
  zipCode: number;
  street: string;
  forSale: boolean;
  numBedrooms: number;
  numBathrooms: string;
  imageUrls: string[];
  laundry: boolean;
  hospitalAccess: boolean;
  BARTAccess: boolean;
  wheelchairAccess: boolean;
  lotSize: number;
}



