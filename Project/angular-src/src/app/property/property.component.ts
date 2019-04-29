import {Component, OnDestroy, OnInit} from '@angular/core';
import {Listing, ListingsService} from "../core/services/listings.service";
import {SearchListingsService} from "../core/services/search.listings.service";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, OnDestroy {
  breakpoint;
  rowWidth;

  listings: Listing[];
  listingSearch: ListingSearch;
  filter: boolean = true;
  isLoaded: boolean = true;

  constructor(
    private router: Router,
    private listingsService: ListingsService,
    private searchService: SearchListingsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.listings = this.searchService.getListings();

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
    this.reloadData();
  }

  onSelectionChange() {
    this.reloadData();
  }

  reloadData() {
    this.isLoaded = false;
    localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
    this.searchService.getSearchListings(this.listingSearch)
      .subscribe(listings => {
          this.isLoaded = true;
          this.listings = listings;
          this.searchService.saveSearchListings(listings);
        },
        err => {
          this.isLoaded = true;
          this.listings = [];
          this.searchService.saveSearchListings([]);
          this.openDialog('Unable to retrieve any listing based on your search and filter options. Please try again');
        });
  }

  onFavoriteClick(listing: Listing) {
    console.log(listing.title);
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getPropertyAccessibility(listing: Listing): string {
    let access = 'Accessibility: ';
    if (!listing.laundry && !listing.hospitalAccess && !listing.wheelchairAccess && !listing.BARTAccess) return access + 'none';
    let laundry = listing.laundry ? 'laundry' : '';
    let hospital = listing.hospitalAccess ? ', hospital' : '';
    let wheelchair = listing.wheelchairAccess ? ', wheelchair' : '';
    let bart = listing.BARTAccess ? ', bart' : '';
    return access + laundry + hospital + wheelchair + bart;
  }

  openDialog(message: string, subscribe: boolean = false) {
    const dialog = this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
  }
}

export interface ListingSearch {
  city: string;
  forSale?: boolean;
  listingType?: string;
  numBedrooms?: number;
  numBathrooms?: number;
}





