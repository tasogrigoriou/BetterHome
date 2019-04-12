import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";
import {first} from "rxjs/operators";
import {RegisterDialog} from "../register/register.dialog";
import {LoginService, LoginUser} from "../core/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  user: Login = {
    username: "",
    password: ""
  };

  loginUser: LoginUser;

  isLoaded = true;

  constructor(private router: Router,
              private loginService: LoginService,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isLoaded = false;
    this.loginService.loginUser(this.user)
      .pipe(first())
      .subscribe(user => {
          this.loginUser = user;
          this.isLoaded = true;
          this.openDialog('Login successful!', true);
        },
        err => {
          this.isLoaded = true;
          this.openDialog('Unable to login. Username or password are incorrect. Please try again', false);
        });
  }

  openDialog(message: string, subscribe: boolean) {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    if (subscribe) {
      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/']);
      });
    }
  }
}

export interface Login {
  username: string;
  password: string;
}
