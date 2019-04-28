import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ListingsService, Listing} from "../core/services/listings.service";
import {first} from "rxjs/operators";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";
import {UploadService} from "../core/services/upload.service";
import {LoginUser} from "../core/services/login.service";

@Component({
  selector: 'app-addlisting',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  loginUser: LoginUser;
  listing: Listing;

  files: FileList | File;

  isLoaded = true;
  didSaveImages = false;

  isFullScreen: boolean;

  constructor(
    private router: Router,
    private listingsService: ListingsService,
    private uploadService: UploadService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.listing = new Listing();

    if (localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
      this.listing.user = this.loginUser;
    }

    this.isFullScreen = (window.innerWidth >= 1000);
  }

  onResize(event) {
    this.isFullScreen = (event.target.innerWidth >= 1000);
  }

  saveImages(files: FileList | File): void {
    this.files = files;
    this.didSaveImages = true;
  }

  onSubmit() {
    if (!this.isDataProvided()) {
      this.openDialog('Please enter valid input for all required fields', false);
      return;
    }

    this.showSpinner();
    this.replaceDoubleQuotes();
    this.listingsService.createListing(this.listing)
      .pipe(first())
      .subscribe(
        result => {
          this.uploadImages(result.listingId);
        },
        err => {
          console.log(err);
          this.hideSpinner();
          this.openDialog('Unable to create listing. Please try again', false);
        }
      );
  }

  replaceDoubleQuotes() {
    this.listing.title = this.listing.title.replace(/"/g, "'");
    this.listing.description = this.listing.description.replace(/"/g, "'");
  }

  uploadImages(listingId: number) {
    let promises = [];
    if (this.files instanceof FileList) {
      for (let i: number = 0; i < this.files.length; i++) {
        promises.push(this.uploadService.uploadImage(this.files[i], listingId));
      }
    }
    else {
      promises.push(this.uploadService.uploadImage(this.files, listingId));
    }

    // Waits for all promises to be returned (all image uploading calls finish)
    Promise.all(promises).then(s => {
      console.log(s);
      this.hideSpinner();
      this.openDialog('Successfully posted new listing!', true);
    }).catch(err => {
      console.log(err);
      this.hideSpinner();
      this.openDialog('Unable to upload images. Please try again', false);
    });
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
