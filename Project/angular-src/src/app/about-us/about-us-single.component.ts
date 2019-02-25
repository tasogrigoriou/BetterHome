import {Component, OnInit} from '@angular/core';
import {Member} from "../core/services/members.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about-us-single',
  templateUrl: './about-us-single.component.html',
  styles: []
})

export class AboutUsSingleComponent implements OnInit {
  member: Member;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.member = new Member(params['name'], params['photoUrl'], params['body']);
      });
  }
}
