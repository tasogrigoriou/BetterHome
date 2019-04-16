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
    'Example Listing1',
    'House',
    3000,
    'San Francisco',
    'California',
    94132,
    'example street1',
    true,
    2,
    '2'
  );
  public exampleListing2 = new Listing(
    70,
    0,
    'Example Listing2',
    'Apartment',
    10000,
    "San Francisco",
    'California',
    94132,
    'example street2',
    true,
    3,
    '3'
  );
  public exampleListing3 = new Listing(
    71,
    0,
    'Example Listing2',
    'Condo',
    30000,
    "San Francisco",
    'California',
    94132,
    'example street3',
    false,
    3,
    '2.5'
  );



}
export class Listing {
  Lid: number;
  DisplayBoard_boardId: number;
  title: string;
  listingType: string;
  price: number;
  city: string;
  state:string;
  zipCode: number;
  street: string;
  forSale: boolean;
  numBedrooms: number;
  numBathrooms: string;

  constructor(Lid: number, DisplayBoard_boardId: number, title: string, listingType: string, price: number, city: string,state:string, zipCode: number,
              street: string, forSale: boolean, numBedrooms: number, numBathrooms: string)
  {
    this.Lid = Lid;
    this.DisplayBoard_boardId = DisplayBoard_boardId;
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
  }
}

