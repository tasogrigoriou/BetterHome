import {Component, OnInit, ViewChild} from '@angular/core';
import {RegisterService} from "../core/services/register.service";
import {LoginUser} from "../core/services/login.service";
import {Listing, ListingsService} from "../core/services/listings.service";
import {DragScrollComponent} from "ngx-drag-scroll/lib";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {DeleteDialog} from "./delete.dialog";
import {UploadService} from "../core/services/upload.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: LoginUser;
  userListings: Listing[] = [];
  favoriteListings: Listing[] = [];

  index = 0;
  isLoaded = false;

  files: File[];

  @ViewChild('drag_scroll', { read: DragScrollComponent }) dragScroll: DragScrollComponent;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private listingsService: ListingsService,
    private uploadService: UploadService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('loginUser')) {
      return;
    }
    this.user = JSON.parse(localStorage.getItem('loginUser'));

    this.loadData();
  }

  loadData() {
    this.listingsService.getUserListings(this.user.userId).subscribe(listings => {
      console.log(listings);
      this.userListings = listings;
      this.isLoaded = true;
    }, err => {
      console.log(err);
      this.isLoaded = true;
    });
  }

  clickLeft(i: number) {
    if (i == 0) return;
    this.index--;
  }

  clickRight(i: number) {
    if (i == this.userListings.length - 1) return;
    this.index++;
  }

  onDeleteListingClick(listing: Listing) {
    this.openDeleteListingDialog(listing, 'Are you sure you want to delete this listing?');
  }

  openInput() {
    document.getElementById("fileInput").click();
  }

  onUploadImageClick(files: File[]) {
    this.isLoaded = false;
    let promises = [];
    for (let i: number = 0; i < files.length; i++) {
      promises.push(this.uploadService.uploadImage(files[i], this.userListings[this.index].listingId).toPromise());
    }

    // Waits for all promises to be returned (all image uploading calls finish)
    Promise.all(promises).then(s => {
      console.log(s);
      this.loadData();
    }).catch(err => {
      console.log(err);
      this.isLoaded = true;
    });
  }

  onDeleteImageClick(imageUrl: string) {
    if (this.userListings[this.index].imageUrls.length == 1) {
      return;
    }
    this.openDeleteImageDialog(imageUrl, 'Are you sure you want to delete this image?');
  }

  deleteListing(listing: Listing) {
    this.listingsService.deleteListing(listing.listingId).subscribe(result => {
      this.userListings = this.userListings.filter(userListing => {
        return userListing.listingId !== listing.listingId;
      });
      this.index = 0;
    }, err => {
      console.log(err);
    });
  }

  deleteImage(imageUrl: string) {
    this.listingsService.deleteImage(imageUrl).subscribe(result => {
      this.userListings[this.index].imageUrls = this.userListings[this.index].imageUrls.filter(url => {
        return url !== imageUrl;
      });
    }, err => {
      console.log(err);
    });
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getPropertyAccessibility(listing: Listing): string {
    let access = 'Accessibility: ';
    if (!listing.laundry && !listing.hospitalAccess && !listing.wheelchairAccess && !listing.BARTAccess) return access + 'none';
    let laundry = listing.laundry ? 'laundry' : '';
    let hospital = listing.hospitalAccess ? ', hospital' : '';
    let wheelchair = listing.wheelchairAccess ? ', wheelchair' : '';
    let bart = listing.BARTAccess ? ', bart' : '';
    return access + laundry + hospital + wheelchair + bart;
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

  openDeleteImageDialog(imageUrl: string, message: string) {
    const dialog = this.dialog.open(DeleteDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result == 'delete') {
        this.deleteImage(imageUrl);
      }
    });
  }
}
