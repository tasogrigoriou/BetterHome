import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

  constructor() {}

  getMembers() {
    return [
      this.tasoMember,
      this.coleMember
    ]
  }

  private tasoMember = new Member(
    'Taso Grigoriou',
    'https://bit.ly/2NnQCof',
    'Taso is the team lead for BetterHome. He currently works at Ancestry as an iOS engineer, and will be graduating from SFSU in Spring 2019.'
  );

  private coleMember = new Member(
    'Michael Tormey',
    'https://bit.ly/2TfL8Ba',
    'Michael is a member of the front end team for BetterHome.'
  );
}

export class Member {
  public name: string;
  public photoUrl: string;
  public body: string;

  constructor(name: string, photoUrl: string, body: string) {
    this.name = name;
    this.photoUrl = photoUrl;
    this.body = body;
  }
}
