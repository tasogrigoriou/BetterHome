import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

  constructor() {}

  getMembers() {
    return [
      this.tasoMember,
      this.henokMember,
      this.liwangMember,
      this.austinMember,
      this.sawyerMember,
      this.coleMember
    ];

  }
  private austinMember = new Member(
    'Austin Sy-Velasco',
    'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/52809925_2350788244932949_4342396319202017280_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=b0820dab31204a2faf17549ada264f1e&oe=5D228764',
    'Austin is a back end developer for BetterHome. He will be graduating from SFSU in Spring 2019.'
  );

  private tasoMember = new Member(
    'Taso Grigoriou',
    'https://bit.ly/2NnQCof',
    'Taso is the team lead for BetterHome. He currently works at Ancestry as an iOS engineer, and will be graduating from SFSU in Spring 2019.'
  );
  private coleMember = new Member(
    'Michael Cole Tormey',
    'https://bit.ly/2TfL8Ba',
    'Cole is a front end engineer for BetterHome.'
  );
  private henokMember = new Member(
    'Henok Kassegn',
    'null',
    'Henok is a front-end team lead for BetterHome.'

  );

  private liwangMember = new Member(
    'Liwang Gao',
    'https://bit.ly/2Nt9ZfN' ,
    'I am the member of front-end team, and will graduate at 2019.'

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
