import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertyComponent} from "./property.component";
import {RegisterService} from "../core/services/register.service";
import {Member} from "../core/services/members.service";
import {Listing} from "../home/home.component";
import {ListingsService} from "../core/services/listings.service";
import {LoginUser} from "../core/services/login.service";
import {RegisterComponent} from "../register/register.component";
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
    localStorage.getItem('userLogin')

    console.log(this.route.snapshot.params);
    this.route.paramMap.subscribe(params => {
      console.log(params);
      let listingId = Number(params.get('listing.Lid'));
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

  showDivs(n, photos) {



    // this.document.getElementById("listingPhotos").src = this.listing.propertyPhotos[1];

    // this.showDivs(this.listing.slideIndex += n);
    // if (this.slideIndex + n > this.listing.propertyPhotos.length )
    //   this.slideIndex = 0;
    // if (this.slideIndex + n < 0) {this.slideIndex = this.listing.propertyPhotos.length}
    // if(n == 0)
    //   return this.listing.propertyPhotos[0];
    // else
    //   return this.listing.propertyPhotos[this.slideIndex + n];
    // var x = document.getElementById("listingPhotos")[0];
    // if(this.listing.propertyPhotos.length + n > this.listing.propertyPhotos.length)
    //   x.src = this.listing.propertyPhotos[1];
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
