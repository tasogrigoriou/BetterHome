import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchListingsService} from "../core/services/search.listings.service";
import {MatDialog} from "@angular/material";
import {RegisterDialog} from "../register/register.dialog";

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit, OnDestroy {

  listingSearch: ListingSearch;
  listings: Listing[];

  isLoaded = true;

  constructor(
    private router: Router,
    private searchService: SearchListingsService,
    public dialog: MatDialog
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
  }

  ngOnDestroy() {
    if (this.listingSearch) {
      localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
    }
  }

  onSearchClick() {
    if (!this.listingSearch.city.length) {
      this.openDialog('Please enter some text for the city field');
    }
    else {
      this.isLoaded = false;
      this.searchService.getSearchListings(this.listingSearch)
        .subscribe(listings => {
            this.isLoaded = true;
            this.searchService.saveSearchListings(listings);
            this.openDialog('Successfully retrieved Listings!', true);
          },
          err => {
            this.isLoaded = true;
            this.openDialog('Unable to retrieve any listing based on your search. Please try again');
          });
    }
  }

  openDialog(message: string, subscribe: boolean = false) {
    const dialog = this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    if (subscribe) {
      dialog.afterClosed().subscribe(result => {
        this.router.navigate(['/properties']);
      });
    }
  }
}

export interface ListingSearch {
  city: string;
  forSale?: boolean;
  listingType?: string;
  numBedrooms?: number;
  numBathrooms?: number;
}

export interface Listing {
  listingId: number;
  title: string;
  listingType: string;
  price: number;
  city: string;
  zipCode: number;
  street: string;
  forSale: boolean;
  numBedrooms: number;
  numBathrooms: string;
}
