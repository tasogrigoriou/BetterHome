import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertyComponent} from "./property.component";
import {RegisterService} from "../core/services/register.service";
import {Member} from "../core/services/members.service";
import {Listing} from "../home/home.component";
import {ListingsService} from "../core/services/listings.service";

@Component({
  selector: 'app-property',
  templateUrl: './property.singleListing.component.html',
  styleUrls: ['./property.singleListing.component.css']
})
export class PropertySingleListingComponent implements OnInit {
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService) { }


  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.route.paramMap.subscribe(params => {
      console.log(params);
      let listingId = Number(params.get('listing.Lid'));
      console.log(listingId);
      this.listing = this.listingsService.getListingById(listingId);
      console.log(this.listing);
    });
  }
}
