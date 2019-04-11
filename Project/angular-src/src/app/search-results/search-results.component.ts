import {Component, Input, OnInit} from '@angular/core';
import {Listing} from "../home/home.component";
import {SearchListingsService} from "../core/services/search.listings.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  listings: Listing[];

  constructor(private searchService: SearchListingsService) { }

  ngOnInit() {
    this.listings = this.searchService.getListings();
    console.log(this.listings);
  }
}
