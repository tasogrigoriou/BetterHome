import {Component, OnInit} from '@angular/core';
import {ListingsService} from "../core/services/listings.service";



@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})


export class PropertyComponent implements OnInit{
  numberOfResult;
  listings;
  constructor(
    private listingsService: ListingsService,
    ) {}
  ngOnInit() {
    this.listings= this.listingsService.getListings();
    this.numberOfResult = this.listings.length;
  }
}






