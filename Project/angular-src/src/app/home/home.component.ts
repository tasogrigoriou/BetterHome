import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listingSearch: ListingSearch;

  constructor() {}

  ngOnInit() {
    this.listingSearch = {
      city: '',
      listingType: '',
      numBedrooms: 0,
      numBathrooms: 0
    }
  }

  onSearchClick() {
    if (!this.listingSearch.city.length) {
      console.log("city is empty");
    }
  }
}

export interface ListingSearch {
  city: string;
  listingType: string;
  numBedrooms: number;
  numBathrooms: number;
}
