import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListingsService, Listing} from "../core/services/listings.service";
//import {HomeComponent, Listing} from "../home/home.component";
import {PropertyComponent} from "./property.component";
import {RegisterService} from "../core/services/register.service";
import {Member} from "../core/services/members.service";

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
    this.route.queryParams.subscribe(params => {
      this.listing = new Listing(params['Lid'], params['DisplayBoard_boardId'], params['title'], params['listingType'],
                                 params['price'], params['city'], params['zipCode'], params['street'],
                                 params['forSale'], params['numBedrooms'], params['numBathrooms']);
    });
  }

}
