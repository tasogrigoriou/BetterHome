import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Listing, ListingsService} from "../core/services/listings.service";
import {LoginUser} from "../core/services/login.service";
import {DragScrollComponent} from "ngx-drag-scroll/lib";


@Component({
  selector: 'app-property',
  templateUrl: './property.singleListing.component.html',
  styleUrls: ['./property.singleListing.component.css']
})
export class PropertySingleListingComponent implements OnInit {
  listing: Listing;
  user: LoginUser;

  @ViewChild('drag_scroll', { read: DragScrollComponent }) dragScroll: DragScrollComponent;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) { }


  ngOnInit() {
    localStorage.getItem('userLogin');

    console.log(this.route.snapshot.params);
    this.route.paramMap.subscribe(params => {
      console.log(params);
      let listingId = Number(params.get('listing.listingId'));
      console.log(listingId);
      this.listing = this.listingsService.getListingById(listingId);
      console.log(this.listing);
    });

  }

  forSale(){
    if(this.listing.forSale == true)
      return "sale";
    return "rent";
  }

  moveLeft() {
    this.dragScroll.moveLeft();
  }

  moveRight() {
    this.dragScroll.moveRight();
  }

  addToFavorites() {

  }
}
