import {Component, OnInit} from '@angular/core';
import {Listing} from "../core/services/listings.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property-single',
  templateUrl: './property-single.component.html',
  styles: [],
})

export class PropertySingleComponent implements OnInit {
  listing: Listing;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.listing = new Listing(params['listingAddress'], params['listingCity'], params['listingState']);
    });
  }
}
