import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    {
      nome: "Ruth Johns",
      nascimento: new Date("Tue Oct 24 2023 01:39:09 GMT-0300 (Brasilia Standard Time)"),
      email: '1234@1234.com',
      senha: '1234',
    },
    {
      nome: 'Mr. Ian Ruecker',
      nascimento: new Date("Thu Jun 15 2023 14:57:17 GMT-0300 (Brasilia Standard Time)"),
      email: '4321@4321.com',
      senha: '4321',
    },
  ];

  constructor() {}

  verify(email: String, senha: String) {
    let resp = this.users.find((x) => x.email == email && x.senha == senha);
    return !!resp;
  }

  reset(email: String) {
    let resp = this.users.find(x => x.email == email);
    if (resp)
      resp.senha = "a1b2c4d4";
    this.save();
    return !!resp;
  }

  register(user: User) {
    this.users.push(user);
    this.save();
  }

  load() {
    this.users = JSON.parse(localStorage.getItem('users')) ?? [];
  }

  save() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
