import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

  constructor() {}

  getMembers() {
    return [
      this.tasoMember,

      this.henokMember,

      this.sawyerMember
    ]
  }

  private tasoMember = new Member(
    'Taso Grigoriou',
    'https://bit.ly/2NnQCof',
    'Taso is the team lead for BetterHome. He currently works at Ancestry as an iOS engineer, and will be graduating from SFSU in Spring 2019.'
  )
  private henokMember = new Member(
    'henok Kassegn',
    'null',
    'Henok is a front-end team lead for BetterHome.'

  );

  private sawyerMember = new Member(
    'Sawyer Nixon',
    'https://bit.ly/2XkcA04',
    'Sawyer is the backend lead for BetterHome. He is currently attending SFSU, and will be graduating in Fall 2019.'
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
