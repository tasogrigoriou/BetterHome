import {Component, OnInit} from '@angular/core';
import {Listing} from "../core/services/listings.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property',
  templateUrl: './property-single.component.html',
  styleUrls: [],
})

export class PropertySingleComponent implements OnInit {
  listing: Listing;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.listing = new Listing(params['Lid'], params['DisplayBoard_boardId'], params['title'], params['listingType'],
        params['price'], params['city'], params['zipCode'], params['street'],
        params['forSale'], params['numBedrooms'], params['numBathrooms']);
    });
  }
}
