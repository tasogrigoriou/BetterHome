import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RegisterService} from "../core/services/register.service";
import {ListingsService, Listing} from "../core/services/listings.service";
import {first} from "rxjs/operators";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";



@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})

export class AddlistingComponent implements OnInit {


  listings;

  isLoaded = true;

  constructor(private router: Router,
              private listingsService: ListingsService,
              public dialog: MatDialog) {}
  ngOnInit() {
    this.listings= this.listingsService.getListings();
  }

  onSubmit() {
    if (this.isDataProvided()) {
      this.isLoaded = false;
      this.listingsService.createListing(this.listings)
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
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  isDataProvided(): boolean {
    return (!this.isEmptyStr(this.listings.title) &&
      !this.isEmptyStr(this.listings.listingType) &&
      !this.isEmptyNum(this.listings.price) &&
      !this.isEmptyNum(this.listings.lotSize) &&
      !this.isEmptyStr(this.listings.city) &&
      !this.isEmptyNum(this.listings.zipCode) &&
      !this.isEmptyStr(this.listings.street) &&
      !this.isEmptyStr(this.listings.state) &&
      !this.isEmptyBool(this.listings.forSale) &&
      !this.isEmptyNum(this.listings.numBedrooms) &&
      !this.isEmptyStr(this.listings.numBathrooms) &&
      !this.isEmptyBool(this.listings.laundry) &&
      !this.isEmptyBool(this.listings.hospitalAccess) &&
      !this.isEmptyBool(this.listings.BARTAccess) &&
      !this.isEmptyBool(this.listings.wheelchairAccess));
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