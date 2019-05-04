import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Listing, ListingsService} from "../core/services/listings.service";
import {ListingSearch, SearchListingsService} from "../core/services/search.listings.service";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {FavoritesService} from "../core/services/favorites.service";
import {LoginUser} from "../core/services/login.service";
import {DragScrollComponent} from "ngx-drag-scroll/lib";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, OnDestroy {
  breakpoint;
  rowWidth;

  user: LoginUser;

  listings: Listing[];
  listingSearch: ListingSearch;

  filter: boolean = true;
  isLoaded: boolean = false;

  accessibilities = new FormControl();
  accessibilityList: string[] = ['Laundry', 'Hospital', 'Wheelchair', 'BART'];

  @ViewChild('drag_scroll', { read: DragScrollComponent }) dragScroll: DragScrollComponent;

  constructor(
    private router: Router,
    private listingsService: ListingsService,
    private searchService: SearchListingsService,
    private favoritesService: FavoritesService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.user = JSON.parse(localStorage.getItem('loginUser'));
    }

    if (localStorage.getItem('listingSearch')) {
      this.listingSearch = JSON.parse(localStorage.getItem('listingSearch'));
    }
    else {
      this.listingSearch = {
        city: ''
      }
    }

    this.listings = this.searchService.getListings();

    this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
    this.rowWidth = (window.innerWidth <= 500) ? '100%' : '30%';

    if (!this.user) {
      this.isLoaded = true;
      return;
    }

    let promises = [];
    for (let i = 0; i < this.listings.length; i++) {
      promises.push(
        this.favoritesService.isFavorite(this.listings[i].listingId, this.user.userId).toPromise().then(result => {
          this.listings[i].isFavorite = true;
        }).catch(err => {
          console.log(err);
        })
      );
    }
    Promise.all(promises).then(s => {
      console.log(s);
      this.isLoaded = true;
    }).catch(err => {
      console.log(err);
      this.isLoaded = true;
    });
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
    if (!this.listingSearch.city.length) {
      this.openDialog('Please enter some text for the city field');
      return;
    }
    this.reloadData();
  }

  onSelectionChange() {
    this.listingSearch.accessibilities = this.accessibilities.value;
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
    if (!listing.isFavorite) {
      this.favoritesService.addFavorite(listing.listingId, this.user.userId).subscribe(result => {
        console.log(result);
        listing.isFavorite = true;
      }, err => {
        console.log(err);
      });
    }
    else {
      this.favoritesService.removeFavorite(listing.listingId, this.user.userId).subscribe(result => {
        console.log(result);
        listing.isFavorite = false;
      }, err => {
        console.log(err);
      });
    }
  }

  isFavorite(listing: Listing): boolean {
    return listing.isFavorite;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getPropertyAccessibility(listing: Listing): string {
    let access = 'Accessibility: ';
    if (!listing.laundry && !listing.hospitalAccess && !listing.wheelchairAccess && !listing.BARTAccess) return access + 'none';

    let accessList: string[] = [];
    if (listing.laundry) accessList.push('laundry');
    if (listing.hospitalAccess) accessList.push('hospital');
    if (listing.wheelchairAccess) accessList.push('wheelchair');
    if (listing.BARTAccess) accessList.push('bart');
    let accessStr = access;
    for (let i = 0; i < accessList.length; i++) {
      if (i == 0) {
        accessStr = accessStr + accessList[i];
      } else {
        accessStr = accessStr + ', ' + accessList[i];
      }
    }
    return accessStr;
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
