import { Injectable } from '@angular/core';
import {zip} from "rxjs";

@Injectable()
export class ListingsService {
  constructor() {}


  getListings(){
     return[
       this.exampleListing1,
       this.exampleListing2,
       this.exampleListing3


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

  public exampleListing1 = new Listing(
    69,
    0,
    'California',
    'Sale',
    3000,
    'San Francisco',
    94132,
    '4th St',
    true,
    2,
    '2'
  );
  public exampleListing2 = new Listing(
    70,
    0,
    'California',
    'Sale',
    3000,
    '2',
    94132,
    '8th St',
    true,
    3,
    '3'
  );
  public exampleListing3 = new Listing(
    71,
    0,
    'California',
    'Sale',
    3000,
    '2',
    94132,
    '11th St',
    false,
    3,
    '2 1/2'
  );



}
export class Listing {
  Lid: number;
  DisplayBoard_boardId: number;
  title: string;
  listingType: string;
  price: number;
  city: string;
  zipCode: number;
  street: string;
  forSale: boolean;
  numBedrooms: number;
  numBathrooms: string;

  constructor(Lid: number, DisplayBoard_boardId: number, title: string, listingType: string, price: number, city: string, zipCode: number,
              street: string, forSale: boolean, numBedrooms: number, numBathrooms: string)
  {
    this.Lid = Lid;
    this.DisplayBoard_boardId = DisplayBoard_boardId;
    this.title = title;
    this.listingType = listingType;
    this.price = price;
    this.city = city;
    this.zipCode = zipCode;
    this.street = street;
    this.forSale = forSale;
    this.numBedrooms = numBedrooms;
    this.numBathrooms = numBathrooms;
  }
}

