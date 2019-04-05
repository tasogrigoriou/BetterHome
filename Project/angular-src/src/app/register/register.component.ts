import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import {RegisterService, User} from "../core/services/register.service";
import {AlertService} from "../core/services/alert.service";

@Component({
  selector: 'app-property',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit() {
    this.registerService.registerUser(this.user)
      .pipe(first())
      .subscribe(
        data => {
          console.log('successful!');
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
        });
  }
}
