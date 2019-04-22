import { Component, OnInit} from '@angular/core';
import {ListingsService} from "../core/services/listings.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.css' ]
})



export class AccountComponent implements OnInit {


  listings
  constructor( private listingsService: ListingsService) {}
  ngOnInit() {
    this.listings= this.listingsService.getListings();

  }

}
