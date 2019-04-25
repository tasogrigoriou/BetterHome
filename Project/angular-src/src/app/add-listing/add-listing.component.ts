import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RegisterService} from "../core/services/register.service";
import {ListingsService, Listing} from "../core/services/listings.service";
import {first} from "rxjs/operators";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-addlisting',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  listing: Listing;

  isLoaded = true;

  constructor(
    private router: Router,
    private listingsService: ListingsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.listing = new Listing();
  }

  onSubmit() {
    if (this.isDataProvided()) {
      this.isLoaded = false;
      this.listingsService.createListing(this.listing)
        .pipe(first())
        .subscribe(data => {
            this.isLoaded = true;
            this.openDialog('Posting creation successful! You may now view and edit your listing under the My Listing tab on your account page', true);
          });
    }
    else {
      this.openDialog('Please enter input for all required fields', false);
    }
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
      !this.isEmptyStr(this.listing.numBathrooms) &&
      !this.isEmptyBool(this.listing.laundry) &&
      !this.isEmptyBool(this.listing.hospitalAccess) &&
      !this.isEmptyBool(this.listing.BARTAccess) &&
      !this.isEmptyBool(this.listing.wheelchairAccess));
    return true;
  }

  isEmptyStr(str: string): boolean {
    return (!str || 0 == str.length);
  }

  isEmptyNum(num: number): boolean {
    return (!num || 0 == num);
  }

  isEmptyBool(bool: boolean) {
    return(!bool);
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
