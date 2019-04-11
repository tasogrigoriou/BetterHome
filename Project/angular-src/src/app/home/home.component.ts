import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {RegisterDialog} from "../register/register.dialog";
import {SearchListingsService} from "../core/services/search.listings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listingSearch: ListingSearch;
  listings: Listing[];

  isLoaded = true;

  constructor(
    private router: Router,
    private searchService: SearchListingsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.listingSearch = {
      city: ''
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
        this.saveListings(listings);
        this.openDialog('Successfully retrieved Listings!', true);
      },
            err => {
          this.isLoaded = true;
          this.openDialog('Unable to retrieve any listings based on your search. Please try again');
      });
    }
  }

  saveListings(listings: Listing[]) {
    this.searchService.listings = listings;
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
        this.router.navigate(['/search-results']);
      });
    }
  }
}

export interface ListingSearch {
  city: string;
  listingType?: string;
  numBedrooms?: number;
  numBathrooms?: number;
}

export interface Listing {
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
}
