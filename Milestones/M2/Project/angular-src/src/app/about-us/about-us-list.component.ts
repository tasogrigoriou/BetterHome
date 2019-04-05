import { Component, OnInit } from '@angular/core';
import { MembersService } from '../core/services/members.service';

@Component({
  selector: 'app-about-us-list',
  templateUrl: './about-us-list.component.html',
  styles: []
})
export class AboutUsListComponent implements OnInit {
  members;

  constructor(private membersService: MembersService) {}

  ngOnInit() {
    this.members = this.membersService.getMembers();
  }
}
