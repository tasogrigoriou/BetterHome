import { Injectable } from '@angular/core';

@Injectable()
export class ListingsService {
  constructor() {}


  getListings(){
     return[
       this.exampleListing1,
       this.exampleListing2,
       this.exampleListing3,
       this.exampleListing4


     ];
  }
  public exampleListing1 = new Listing(
    '1 4th St',
    ' San Francisco',
    'California'
  );
  public exampleListing2 = new Listing(
    '3 8th Ave',
    ' New York City',
    'New York'
  );
  public exampleListing3 = new Listing(
    '2 Wall St',
    ' New York City',
    'New York'
  );
  public exampleListing4 = new Listing(
    '4 Lombard St',
    ' San Francisco',
    'California'
  );



}
export class Listing {
  public listingAddress: string;
  public listingCity: string;
  public listingState: string;

  constructor(listingAddress: string, listingCity: string, listingState: string) {
    this.listingAddress = listingAddress;
    this.listingCity = listingCity;
    this.listingState = listingState;
  }
}

