import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

  constructor() {}

  getMembers() {
    return [
      this.tasoMember,
      this.austinMember
    ]
  }
  private austinMember = new Member(
    'Austin Sy-Velasco',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/52809925_2350788244932949_4342396319202017280_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=b0820dab31204a2faf17549ada264f1e&oe=5D228764',
    'Austin is a back end developer for BetterHome. He will be graduating from SFSU in Spring 2019.'
  )

  private tasoMember = new Member(
    'Taso Grigoriou',
    'https://bit.ly/2NnQCof',
    'Taso is the team lead for BetterHome. He currently works at Ancestry as an iOS engineer, and will be graduating from SFSU in Spring 2019.'
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
