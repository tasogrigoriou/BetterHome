import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {LoginUser} from "../core/services/login.service";
import {Listing} from "../core/services/listings.service";
import {Router} from "@angular/router";
import {AdminService} from "../core/services/admin.service";

@Component({
  selector: 'app-admin-listings',
  templateUrl: './admin-listings.component.html',
  styleUrls: ['./admin-listings.component.css']
})
export class AdminListingsComponent implements OnInit {
  loginUser: LoginUser;

  listings: Listing[];

  isUserAdmin: boolean = false;
  isLoaded: boolean = false;

  displayedColumns = ['id', 'title', 'listingType', 'forSale', 'address', 'price'];
  dataSource: MatTableDataSource<Listing>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('loginUser')) return;

    this.showSpinner();
    this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
    this.isUserAdmin = this.loginUser.username === 'admin';

    this.adminService.getAllListings().subscribe(listings => {
      this.listings = listings;
      this.dataSource = new MatTableDataSource(listings);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.hideSpinner();
    }, err => {
      console.log(err);
      this.hideSpinner();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(listing: Listing) {
    console.log(listing);
    this.router.navigate(['/update-property', listing.listingId]);
  }

  getForSaleTitle(listing: Listing): string {
    return listing.forSale ? 'Sale' : 'Rent';
  }

  getAddressTitle(listing: Listing): string {
    return `${listing.street}, ${listing.city}, ${listing.state}, ${listing.zipCode}`;
  }

  numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  showSpinner() {
    this.isLoaded = false;
  }

  hideSpinner() {
    this.isLoaded = true;
  }
}
