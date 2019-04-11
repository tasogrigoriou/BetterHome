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
    'California',
     'Sale',
    '11',
    '2',
    '2'

  );
  public exampleListing2 = new Listing(
    '3 8th Ave',
    ' New York City',
    'New York',
    'Rent',
    '3,000',
    '2',
    '1'
  );
  public exampleListing3 = new Listing(
    '2 Wall St',
    ' New York City',
    'New York',
    'Rent',
    '4,500',
    '1',
    '1'
  );
  public exampleListing4 = new Listing(
    '4 Lombard St',
    ' San Francisco',
    'California',
    'Rent',
    '3,600',
    '3',
    '2'
  );



}
export class Listing {
  public listingAddress: string;
  public listingCity: string;
  public listingState: string;
  public listingRentOrSale: string;
  public listingPrice: string;
  public listingNumberOfBedrooms: string;
  public listingNumberOfBathrooms: string;
  public listingPhotos: [];


  constructor(listingAddress: string, listingCity: string, listingState: string, listingRentOrSale: string,listingPrice: string, listingNumberOfBedrooms: string, listingNumberOfBathrooms: string) {
    this.listingAddress = listingAddress;
    this.listingCity = listingCity;
    this.listingState = listingState;
    this.listingRentOrSale = listingRentOrSale;
    this.listingPrice = listingPrice;
    this.listingNumberOfBedrooms = listingNumberOfBedrooms;
    this.listingNumberOfBathrooms = listingNumberOfBathrooms;
  }
}

