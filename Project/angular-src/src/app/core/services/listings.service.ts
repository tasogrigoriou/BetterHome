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
    'listing1',
    'photo1',
    'street1',
    'San Francisco',
    'California',
    '1',
    '2'
  );
  public exampleListing2 = new Listing(
    'listing2',
    'photo2',
    ' street2',
    'New York City',
    'New York',
    '1',
    '2'
  );
  public exampleListing3 = new Listing(
    'listing3',
    'photo3',
    ' street3',
    'New York City',
    'New York',
    '2',
    '1'
  );
  public exampleListing4 = new Listing(
    'listing4',
    'photo4',
    ' street4',
    'San Francisco',
    'California',
    '2',
    '1'
  );



}



export class Listing {
  public title: string;
  public photoUrl: string
  public street: string;
  public city: string;
  public state: string;
  public numBedrooms:string;
  public numBathrooms:string;



  constructor(title:string,photoUrl:string, street: string, city: string, state:string,numBedrooms:string,numBathrooms:string,) {
    this.title = title;
    this.photoUrl = photoUrl;
    this.street = street;
    this.city = city;
    this.state = state;
    this.numBedrooms = numBedrooms;
    this.numBathrooms = numBathrooms;


  }
}

