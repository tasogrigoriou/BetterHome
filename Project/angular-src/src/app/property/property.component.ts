import {Component, OnDestroy, OnInit} from '@angular/core';
import {Listing, ListingsService} from "../core/services/listings.service";
import {SearchListingsService} from "../core/services/search.listings.service";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, OnDestroy {
  breakpoint;
  rowWidth;

  numberOfResult;
  listings: Listing[];
  listingSearch: ListingSearch;
  filter: boolean = true;

  constructor(
    private listingsService: ListingsService,
    private searchService: SearchListingsService
  ) {}

  ngOnInit() {
    this.listings = this.searchService.getListings();
    console.log(this.listings);
    this.numberOfResult = this.listings.length;

    if (localStorage.getItem('listingSearch')) {
      this.listingSearch = JSON.parse(localStorage.getItem('listingSearch'));
    }
    else {
      this.listingSearch = {
        city: ''
      }
    }

    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
    this.rowWidth = (window.innerWidth <= 500) ? '100%' : '30%';
  }

  ngOnDestroy() {
    if (this.listingSearch) {
      localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
    }
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 3;
    this.rowWidth = (event.target.innerWidth <= 500) ? '100%' : '30%';
  }

  onSearchClick() {

  }

  onFavoriteClick() {

  }
}

export interface ListingSearch {
  city: string;
  forSale?: boolean;
  listingType?: string;
  numBedrooms?: number;
  numBathrooms?: number;
}





