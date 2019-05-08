import { Component, OnInit } from '@angular/core';
import {AdminService} from "../core/services/admin.service";
import {LoginUser} from "../core/services/login.service";
import {DeleteDialog} from "../account/delete.dialog";
import {MatDialog} from "@angular/material";
import {ListingsService} from "../core/services/listings.service";
import {RegisterDialog} from "../register/register.dialog";

@Component({
  selector: 'app-admin-images',
  templateUrl: './admin-images.component.html',
  styleUrls: ['./admin-images.component.css']
})
export class AdminImagesComponent implements OnInit {
  breakpoint;

  loginUser: LoginUser;

  images: string[];

  isUserAdmin: boolean;
  isLoaded: boolean;

  constructor(
    private adminService: AdminService,
    private listingsService: ListingsService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('loginUser')) return;

    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;

    this.showSpinner();
    this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
    this.isUserAdmin = this.loginUser.username === 'admin';

    this.loadData();
  }

  loadData() {
    this.adminService.getAllImages().subscribe(images => {
      console.log(images);
      this.images = images;
      this.hideSpinner();
    }, err => {
      console.log(err);
      this.hideSpinner();
    });
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  getImage(imageUrl: string): string {
    return `${ListingsService.cloudStorage}/${imageUrl}`;
  }

  onDeleteImageClick(imageUrl: string) {
    this.openDeleteImageDialog(imageUrl, 'Are you sure you want to delete this image?');
  }

  deleteImage(imageUrl: string) {
    this.showSpinner();
    this.listingsService.deleteImage(imageUrl).subscribe(result => {
      this.openDialog('Successfully deleted image');
      this.loadData();
    }, err => {
      this.openDialog('Unable to delete image');
      console.log(err);
    });
  }

  showSpinner() {
    this.isLoaded = false;
  }

  hideSpinner() {
    this.isLoaded = true;
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

  openDialog(message: string) {
    this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
  }
}
