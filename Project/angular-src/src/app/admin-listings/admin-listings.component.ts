import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {LoginUser} from "../core/services/login.service";
import {Listing} from "../core/services/listings.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-listings',
  templateUrl: './admin-listings.component.html',
  styleUrls: ['./admin-listings.component.css']
})
export class AdminListingsComponent implements OnInit {
  loginUser: LoginUser;

  isUserAdmin: boolean = false;
  isLoaded: boolean = false;

  displayedColumns = ['id', 'title', 'listingType', 'price'];
  dataSource: MatTableDataSource<Listing>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('loginUser')) return;

    this.showSpinner();
    this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
    this.isUserAdmin = this.loginUser.username === 'admin';

    const listings: Listing[] = [];
    for (let i = 1; i <= 100; i++) { listings.push(createNewListing(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(listings);

    this.hideSpinner();
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(listing: Listing) {
    console.log(listing);
    this.router.navigate(['/update-property', listing.listingId]);
  }

  showSpinner() {
    this.isLoaded = false;
  }

  hideSpinner() {
    this.isLoaded = true;
  }
}

function createNewListing(id: number): Listing {
  const title =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return new Listing(
    id,
    title,
    'home',
    id * 5
  );

// public listingId: number = null,
//     public title: string = '',
//     public listingType: string = '',
//     public price: number = null,
//     public city: string = '',
//     public state: string = '',
//     public zipCode: number = null,
//     public street: string = '',
//     public forSale: boolean = null,
//     public numBedrooms: number = null,
//     public numBathrooms: number = null,
//     public imageUrls: string[] = [],
//     public laundry: boolean = false,
//     public hospitalAccess: boolean = false,
//     public BARTAccess: boolean = false,
//     public wheelchairAccess: boolean = false,
//     public lotSize: number = null,
//     public description: string = '',
//     public user: LoginUser = null,
//     public isFavorite: boolean = false
}

const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
