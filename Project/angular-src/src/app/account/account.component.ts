import { Component, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";
import {RegisterService, RegisterUser} from "../core/services/register.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [ './account.component.css' ]
})



export class AccountComponent implements OnInit {
  user: RegisterUser;

  isLoaded = true;

  constructor(
    private registerService: RegisterService,
  ) {}

  ngOnInit() {

  }

  onSaveInfoClick() {

  }

}
