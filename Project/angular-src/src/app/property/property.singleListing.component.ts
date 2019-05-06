import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Listing, ListingsService} from "../core/services/listings.service";
import {LoginUser} from "../core/services/login.service";
import {DragScrollComponent} from "ngx-drag-scroll/lib";
import {FavoritesService} from "../core/services/favorites.service";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";


@Component({
  selector: 'app-property',
  templateUrl: './property.singleListing.component.html',
  styleUrls: ['./property.singleListing.component.css']
})
export class PropertySingleListingComponent implements OnInit {
  listing: Listing;
  user: LoginUser;

  @ViewChild('drag_scroll', { read: DragScrollComponent }) dragScroll: DragScrollComponent;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService,
    private favoritesService: FavoritesService,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.user = JSON.parse(localStorage.getItem('loginUser'));
    }
    this.route.paramMap.subscribe(params => {
      let listingId = Number(params.get('listing.listingId'));
      this.listingsService.getSingleListing(listingId).subscribe(listing => {
        this.listing = listing;
      }, err => {
        console.log(err);
      })
    });
  }

  saleTitle(): string {
    return this.listing.forSale ? 'Sale' : 'Rent';
  }

  priceTitle(): string {
    return this.listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  bedTitle(): string {
    if (this.listing.numBedrooms == 1) {
      return this.listing.numBedrooms.toString() + ' bed';
    }
    return this.listing.numBedrooms.toString() + ' beds';
  }

  bathTitle(): string {
    if (this.listing.numBathrooms == 1) {
      return this.listing.numBathrooms.toString() + ' bath';
    }
    return this.listing.numBedrooms.toString() + ' baths';
  }

  accessibilityTitle(): string {
    let listing = this.listing;
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

  moveLeft() {
    this.dragScroll.moveLeft();
  }

  moveRight() {
    this.dragScroll.moveRight();
  }

  addToFavorites() {
    this.favoritesService.addFavorite(this.listing.listingId, this.user.userId).subscribe(result => {
      this.openDialog('Successfully added listing to favorites!')
    }, err => {
      console.log(err);
    })
  }

  formatPhoneNumber(phoneNumberString: string) {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

  openDialog(message: string) {
    const dialog = this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
  }
}
