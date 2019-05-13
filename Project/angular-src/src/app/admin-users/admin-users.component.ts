import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LoginUser} from "../core/services/login.service";
import {Router} from "@angular/router";
import {AdminService} from "../core/services/admin.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  loginUser: LoginUser;

  users: LoginUser[];

  isUserAdmin: boolean = false;
  isLoaded: boolean = false;

  displayedColumns = ['id', 'username', 'firstName', 'lastName', 'emailAddress', 'phoneNumber'];
  dataSource: MatTableDataSource<LoginUser>;

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

    this.adminService.getAllUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
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

  onRowClick(user: LoginUser) {
    this.router.navigate(['/update-account', user.userId]);
  }

  showSpinner() {
    this.isLoaded = false;
  }

  hideSpinner() {
    this.isLoaded = true;
  }
}
