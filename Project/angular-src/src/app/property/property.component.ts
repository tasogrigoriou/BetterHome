import {Component, NgModule, OnInit} from '@angular/core';
import {ListingInfo, ListingsService} from "../core/services/listings.service";
import {ActivatedRoute} from "@angular/router";
import { AppRoutingModule } from './property-routing';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
})
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule]
})

export class PropertyComponent implements OnInit{
  numberOfResult=10000;
  listingInfo:ListingInfo
  listings
  constructor(
    private listingsService: ListingsService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.listingInfo = new ListingInfo(params['listingAddress'], params['listingCity'], params['listingState']);
    });
    this.listings= this.listingsService.getListings();
  }
}
//common out the above class  and use the  following class to see the listing/result page that w/o implement variables
// export class PropertyComponent implements OnInit{
//   numberOfResult=10000;
//   ngOnInit() {
//
//   }
//
// }





