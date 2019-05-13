import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService, LoginUser} from "../core/services/login.service";
import {first} from "rxjs/operators";
import {RegisterDialog} from "../register/register.dialog";
import {MatDialog} from "@angular/material";
import {DeleteDialog} from "../account/delete.dialog";

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  loginUser: LoginUser;
  editUser: LoginUser;
  userId: number;
  newPassword: string = '';

  isUserAdmin: boolean;
  isLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('loginUser')) return;

    this.showSpinner();
    this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
    this.isUserAdmin = this.loginUser.username === 'admin';

    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('userId'));
      this.loginService.getSingleUser(this.userId).subscribe(editUser => {
        this.editUser = editUser;
        this.hideSpinner();
      }, err => {
        console.log(err);
      })
    });
  }

  onUpdateClick() {
    this.showSpinner();
    this.loginService.updateUser({
      userId: this.userId,
      firstName: this.editUser.firstName,
      lastName: this.editUser.lastName,
      username: this.editUser.username,
      password: !this.isEmpty(this.newPassword) ? this.newPassword : '',
      emailAddress: this.editUser.emailAddress,
      phoneNumber: this.editUser.phoneNumber
    })
      .pipe(first())
      .subscribe(data => {
          this.hideSpinner();
          this.openDialog('Update account info successful', true);
        },
        error => {
          console.log(error);
          this.hideSpinner();
        });
  }

  deleteUser(user: LoginUser) {
    this.showSpinner();
    this.loginService.deleteUser(user.userId).subscribe(result => {
      this.hideSpinner();
      this.openDialog('Successfully deleted account', true);
    }, err => {
      this.hideSpinner();
      this.openDialog('Unable to delete account');
      console.log(err);
    })
  }

  onDeleteClick() {
    this.openDeleteUserDialog(this.editUser, 'Are you sure you want to delete this user?');
  }

  showSpinner() {
    this.isLoaded = false;
  }

  hideSpinner() {
    this.isLoaded = true;
  }

  isEmpty(str: string): boolean {
    return (!str || 0 === str.length);
  }

  openDialog(message: string, subscribe: boolean = false) {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    if (subscribe) {
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/admin-users']);
      });
    }
  }

  openDeleteUserDialog(user: LoginUser, message: string) {
    const dialog = this.dialog.open(DeleteDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result == 'delete') {
        this.deleteUser(user);
      }
    });
  }
}
