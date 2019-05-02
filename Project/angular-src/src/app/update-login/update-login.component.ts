import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {RegisterService, RegisterUser} from "../core/services/register.service";
import {MatDialog} from '@angular/material';
import {RegisterDialog} from "../register/register.dialog";
import {LoginService, LoginUser} from "../core/services/login.service";
import {Login} from "../login/login.component";

@Component({
  selector: 'app-update-login',
  templateUrl: './update-login.component.html',
  styleUrls: ['./update-login.component.css']
})
export class UpdateLoginComponent implements OnInit {
  loginUser: LoginUser;
  registerUser: RegisterUser;

  user: Login = {
    username: "",
    password: ""
  };
  oldUsername: string;
  oldPassword: string;
  newPassword: string;

  isLoaded = true;

  constructor(private router: Router,
              private loginService: LoginService,
              public dialog: MatDialog) { }

  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
      this.oldUsername = this.loginUser.username;
    }
    this.registerUser = new RegisterUser();
  }

  onSubmit() {
    if (this.isDataProvided()) {
      this.isLoaded = false;

      this.loginService.loginUser({
        username: this.oldUsername,
        password: this.oldPassword
      })
        .pipe(first())
        .subscribe(result => {

            this.loginService.updateUser({
              userId: result.userId,
              firstName: this.loginUser.firstName,
              lastName: this.loginUser.lastName,
              username: this.loginUser.username,
              password: !this.isEmpty(this.newPassword) ? this.newPassword : '',
              emailAddress: this.loginUser.emailAddress,
              phoneNumber: this.loginUser.phoneNumber
            })
              .pipe(first())
              .subscribe(data => {
                  this.isLoaded = true;
                  this.loginService.emitLoginEvent(this.loginUser);
                  this.openDialog('Update login info successful!', true);
                },
                error => {
                  console.log(error);
                  this.isLoaded = true;
                });
          }, err => {
            console.log(err);
            this.isLoaded = true;
            this.openDialog('Unable to verify credentials. Old password is incorrect. Please try again');
          }
        );
    }
    else {
      this.openDialog('Please enter old password for validating credentials');
    }
  }

  isDataProvided(): boolean {
    return (!this.isEmpty(this.loginUser.username) &&
      !this.isEmpty(this.oldPassword) &&
      !this.isEmpty(this.loginUser.firstName) &&
      !this.isEmpty(this.loginUser.lastName) &&
      !this.isEmpty(this.loginUser.emailAddress) &&
      !this.isEmpty(this.loginUser.phoneNumber));
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
        this.router.navigate(['/account']);
      });
    }
  }
}
