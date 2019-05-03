import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListingsService, Listing} from "../core/services/listings.service";
import {first} from "rxjs/operators";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";
import {LoginUser} from "../core/services/login.service";

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
      !this.isEmptyBool(this.listing.forSale) &&
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
        this.router.navigate(['/account']);
      });
    }
  }
}
