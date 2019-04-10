import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {RegisterService, RegisterUser} from "../core/services/register.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RegisterDialog} from "./register.dialog";

@Component({
  selector: 'app-property',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterUser;

  isLoaded = true;

  constructor(private router: Router,
              private registerService: RegisterService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.user = new RegisterUser();
  }

  onSubmit() {
    if (this.isDataProvided()) {
      this.isLoaded = false;
      this.registerService.registerUser(this.user)
        .pipe(first())
        .subscribe(data => {
            this.isLoaded = true;
            this.openDialog('Registration successful!', true);
          },
          error => {
            this.isLoaded = true;
            this.openDialog('Username is already taken. Please choose another username', false);
          });
    }
    else {
      this.openDialog('Please enter input for all required fields', false);
    }
  }

  isDataProvided(): boolean {
    return (!this.isEmpty(this.user.username) &&
      !this.isEmpty(this.user.password) &&
      !this.isEmpty(this.user.firstName) &&
      !this.isEmpty(this.user.lastName) &&
      !this.isEmpty(this.user.emailAddress) &&
      !this.isEmpty(this.user.phoneNumber));
  }

  isEmpty(str: string): boolean {
    return (!str || 0 === str.length);
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
        this.router.navigate(['/login']);
      });
    }
  }
}
