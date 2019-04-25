import { Component, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";
import {RegisterService} from "../core/services/register.service";
import {LoginUser} from "../core/services/login.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.css' ]
})



export class AccountComponent implements OnInit {
  user: LoginUser;

  isLoaded = true;

  constructor(
    private registerService: RegisterService,
  ) {}

  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.user = JSON.parse(localStorage.getItem('loginUser'));
    }
  }

  onSaveInfoClick() {

  }

}
