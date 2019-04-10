import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ListingsService, Listing} from "../core/services/listings.service";
import {PropertyComponent} from "./property.component";
import {RegisterService} from "../core/services/register.service";

@Component({
  selector: 'app-property',
  templateUrl: './property.singleListing.component.html',
  styleUrls: ['./property.singleListing.component.css']
})
export class PropertySingleListingComponent implements OnInit {
  listings

  constructor(
    private router: Router,
    private listingsService: ListingsService) { }


  ngOnInit() {
    this.listings= this.listingsService.getListings();
  }

}
