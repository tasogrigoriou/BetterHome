import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../core/services/login.service";
import {MatDialog} from "@angular/material";
import {RegisterDialog} from "../register/register.dialog";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.loginService.logoutUser();
    this.openDialog('Logout successful!');
  }

  openDialog(message: string) {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '250px',
      data: {
        message: message
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }
}
