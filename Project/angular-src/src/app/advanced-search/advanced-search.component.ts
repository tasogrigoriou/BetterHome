import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ListingSearch, SearchListingsService} from "../core/services/search.listings.service";
import {Listing} from "../core/services/listings.service";
import {MatDialog} from "@angular/material";
import {RegisterDialog} from "../register/register.dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit, OnDestroy {

  listingSearch: ListingSearch;
  listings: Listing[];

  accessibilities = new FormControl();
  accessibilityList: string[] = ['Laundry', 'Hospital', 'Wheelchair', 'BART'];

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

  onAccessibilityChange() {
    this.listingSearch.accessibilities = this.accessibilities.value;
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
            this.router.navigate(['/properties']);
          },
          err => {
            this.isLoaded = true;
            this.openDialog('Unable to retrieve any listing based on your search. Please try again');
          });
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
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
