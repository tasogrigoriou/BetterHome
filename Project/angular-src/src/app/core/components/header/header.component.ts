import { Component, OnInit } from '@angular/core';
import {LoginService, LoginUser} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginUser: LoginUser;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
    }

    this.loginService.getLoginUser.subscribe(loginUser => {
        this.loginUser = loginUser;
    });
  }
}
