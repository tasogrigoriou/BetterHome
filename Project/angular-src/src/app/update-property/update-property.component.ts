import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListingsService, Listing} from "../core/services/listings.service";
import {first} from "rxjs/operators";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";
import {LoginUser} from "../core/services/login.service";
import {DeleteDialog} from "../account/delete.dialog";

@Component({
  selector: 'app-update-update',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {
  loginUser: LoginUser;
  listing: Listing;

  isLoaded: boolean = true;
  listingBelongsToUser: boolean = false;

  isFullScreen: boolean;
  isUserAdmin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsService: ListingsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('loginUser')) return;

    this.showSpinner();
    this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
    this.isUserAdmin = this.loginUser.username === 'admin';

    this.route.paramMap.subscribe(params => {
      let listingId = Number(params.get('listingId'));
      this.listingsService.getSingleListing(listingId).subscribe(listing => {
        console.log(listing);
        this.listingBelongsToUser = listing.user.userId === this.loginUser.userId;
        this.listing = listing;
        this.hideSpinner();
      }, err => {
        console.log(err);
        this.hideSpinner();
      });
    });

    this.isFullScreen = (window.innerWidth >= 1000);
  }

  onResize(event) {
    this.isFullScreen = (event.target.innerWidth >= 1000);
  }

  onUpdateClick() {
    console.log(this.listing);
    if (!this.isDataProvided()) {
      this.openDialog('Please enter valid input for all required fields', false);
      return;
    }

    this.showSpinner();
    this.replaceDoubleQuotes();
    this.listingsService.updateListing(this.listing)
      .pipe(first())
      .subscribe(
        result => {
          this.hideSpinner();
          this.openDialog('Successfully update listing!', true);
        },
        err => {
          console.log(err);
          this.hideSpinner();
          this.openDialog('Unable to update listing. Please try again', false);
        }
      );
  }

  onDeleteClick() {
    this.openDeleteListingDialog(this.listing, 'Are you sure you want to delete this listing?');
  }

  deleteListing(listing: Listing) {
    this.listingsService.deleteListing(listing.listingId).subscribe(result => {
      this.openDialog('Successfully deleted listing', true);
    }, err => {
      console.log(err);
      this.openDialog('Unable to delete listing', false);
    })
  }

  replaceDoubleQuotes() {
    this.listing.title = this.listing.title.replace(/"/g, "'");
    this.listing.description = this.listing.description.replace(/"/g, "'");
  }

  showSpinner() {
    this.isLoaded = false;
  }

  hideSpinner() {
    this.isLoaded = true;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  isDataProvided(): boolean {
    return (!this.isEmptyStr(this.listing.title) &&
      !this.isEmptyStr(this.listing.listingType) &&
      !this.isEmptyNum(this.listing.price) &&
      !this.isEmptyNum(this.listing.lotSize) &&
      !this.isEmptyStr(this.listing.city) &&
      !this.isEmptyNum(this.listing.zipCode) &&
      !this.isEmptyStr(this.listing.street) &&
      !this.isEmptyStr(this.listing.state) &&
      !this.isEmptyNum(this.listing.numBedrooms) &&
      !this.isEmptyNum(this.listing.numBathrooms));
  }

  isEmptyStr(str: string): boolean {
    return (!str || 0 == str.length);
  }

  isEmptyNum(num: number): boolean {
    return (!num || 0 == num);
  }

  isEmptyBool(bool: boolean) {
    return (!bool);
  }

  openDialog(message: string, subscribe: boolean) {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    if (subscribe) {
      dialogRef.afterClosed().subscribe(result => {
        if (this.isUserAdmin) {
          this.router.navigate(['/admin-listings']);
        } else {
          this.router.navigate(['/account']);
        }
      });
    }
  }

  openDeleteListingDialog(listing: Listing, message: string) {
    const dialog = this.dialog.open(DeleteDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result == 'delete') {
        this.deleteListing(listing);
      }
    });
  }
}
