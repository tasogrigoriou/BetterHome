import {Component, OnInit, ViewChild} from '@angular/core';
import {RegisterService} from "../core/services/register.service";
import {LoginUser} from "../core/services/login.service";
import {Listing, ListingsService} from "../core/services/listings.service";
import {DragScrollComponent} from "ngx-drag-scroll/lib";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {DeleteDialog} from "./delete.dialog";
import {UploadService} from "../core/services/upload.service";
import {FavoritesService} from "../core/services/favorites.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: LoginUser;

  userListings: Listing[] = [];
  favoriteListings: Listing[] = [];
  userListingIndex = 0;
  favoriteListingIndex = 0;

  files: File[];

  isLoaded = false;

  @ViewChild('drag_scroll', { read: DragScrollComponent }) dragScroll: DragScrollComponent;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private listingsService: ListingsService,
    private favoritesService: FavoritesService,
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
    let promises = [];

    promises.push(
      this.listingsService.getUserListings(this.user.userId).toPromise().then(listings => {
        console.log('my listings: ' + listings);
        this.userListings = listings;
      }).catch(err => {
        console.log(err);
      })
    );
    promises.push(
      this.favoritesService.getFavorites(this.user.userId).toPromise().then(favorites => {
        console.log('my favorites: ' + favorites);
        this.favoriteListings = favorites;
      }).catch(err => {
        console.log(err);
      })
    );

    Promise.all(promises).then(s => {
      this.isLoaded = true;
    }).catch(err => {
      console.log(err);
      this.isLoaded = true;
    });
  }

  clickLeftUserListings(i: number) {
    if (i == 0) return;
    this.userListingIndex--;
  }

  clickRightUserListings(i: number) {
    if (i == this.userListings.length - 1) return;
    this.userListingIndex++;
  }

  clickLeftFavoriteListings(i: number) {
    if (i == 0) return;
    this.favoriteListingIndex--;
  }

  clickRightFavoriteListings(i: number) {
    if (i == this.favoriteListings.length - 1) return;
    this.favoriteListingIndex++;
  }

  onDeleteListingClick(listing: Listing) {
    this.openDeleteListingDialog(listing, 'Are you sure you want to delete this listing?');
  }

  onRemoveFavoriteListingClick(listing: Listing) {
    this.openRemoveFavoriteListingDialog(listing, 'Are you sure you want to remove this listing from your favorites?')
  }

  openInput() {
    document.getElementById("fileInput").click();
  }

  onUploadImageClick(files: File[]) {
    this.isLoaded = false;
    let promises = [];
    for (let i: number = 0; i < files.length; i++) {
      promises.push(this.uploadService.uploadImage(files[i], this.userListings[this.userListingIndex].listingId).toPromise());
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
    if (this.userListings[this.userListingIndex].imageUrls.length == 1) {
      return;
    }
    this.openDeleteImageDialog(imageUrl, 'Are you sure you want to delete this image?');
  }

  onEditAccountClick() {
    this.router.navigate(['/update-login']);
  }

  onEditListingClick() {
    let listing = this.userListings[this.userListingIndex];
    this.router.navigate(['/update-property', listing.listingId]);
  }

  navigateToListing(listingId: number) {
    this.router.navigate(['/properties', listingId]);
  }

  deleteListing(listing: Listing) {
    this.listingsService.deleteListing(listing.listingId).subscribe(result => {
      this.userListings = this.userListings.filter(userListing => {
        return userListing.listingId !== listing.listingId;
      });
      this.userListingIndex = 0;
    }, err => {
      console.log(err);
    });
  }

  deleteImage(imageUrl: string) {
    this.listingsService.deleteImage(imageUrl).subscribe(result => {
      this.userListings[this.userListingIndex].imageUrls = this.userListings[this.userListingIndex].imageUrls.filter(url => {
        return url !== imageUrl;
      });
    }, err => {
      console.log(err);
    });
  }

  removeFavoriteListing(listing: Listing) {
    this.favoritesService.removeFavorite(listing.listingId, this.user.userId).subscribe(result => {
      this.favoriteListings = this.favoriteListings.filter(favListing => {
        return favListing.listingId !== listing.listingId;
      });
      this.favoriteListingIndex = 0;
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

  openRemoveFavoriteListingDialog(listing: Listing, message: string) {
    const dialog = this.dialog.open(DeleteDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result == 'delete') {
        this.removeFavoriteListing(listing);
      }
    });
  }
}
