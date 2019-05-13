import { Component, OnInit } from '@angular/core';
import {LoginService, LoginUser} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginUser: LoginUser;
  isUserAdmin: boolean = false;

  isMobileScreen: boolean;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    if (localStorage.getItem('loginUser')) {
      this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
      this.isUserAdmin = this.loginUser.username === 'admin';
    }

    this.loginService.getLoginUser.subscribe(loginUser => {
      this.loginUser = loginUser;
      if (this.loginUser && !this.isEmpty(this.loginUser.username)) {
        this.isUserAdmin = this.loginUser.username === 'admin';
      }
    });

    this.isMobileScreen = (window.innerWidth <= 500);
  }

  onResize(event) {
    this.isMobileScreen = (event.target.innerWidth <= 500);
  }

  isEmpty(str: string): boolean {
    return (!str || 0 === str.length);
  }
}
