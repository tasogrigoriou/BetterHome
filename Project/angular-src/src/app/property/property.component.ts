import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListingsService} from "../core/services/listings.service";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, OnDestroy {
  numberOfResult;
  listings;
  listingSearch: ListingSearch;
  filter: boolean = true;

  constructor(
    private listingsService: ListingsService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('listingSearch')) {
      this.listingSearch = JSON.parse(localStorage.getItem('listingSearch'));
    }
    else {
      this.listingSearch = {
        city: ''
      }
    }
    this.listings= this.listingsService.getListings();
    this.numberOfResult = this.listings.length;
  }

  ngOnDestroy() {
    if (this.listingSearch) {
      localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
    }
  }

  onSearchClick() {

  }
}

export interface ListingSearch {
  city: string;
  forSale?: boolean;
  listingType?: string;
  numBedrooms?: number;
  numBathrooms?: number;
}





