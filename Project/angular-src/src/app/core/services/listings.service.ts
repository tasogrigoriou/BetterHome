import { Injectable } from '@angular/core';

@Injectable()
export class ListingsService {
  constructor() {}


  getListings(){
     return[
       this.exampleListing1,
       this.exampleListing2

     ];
  }
  public exampleListing1 = new ListingInfo(
    '1 4th st',
    ' San Francisco',
    'California'
  );
  private exampleListing2 = new ListingInfo(
    '1 8th Ave',
    ' New York city',
    'New York'
  );



}
export class ListingInfo {
  public listingAddress: string;
  public listingCity: string;
  public listingState: string;

  constructor(listingAddress: string, listingCity: string, listingState: string) {
    this.listingAddress = listingAddress;
    this.listingCity = listingCity;
    this.listingState = listingState;
  }
}

