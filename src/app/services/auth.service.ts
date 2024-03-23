import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    {
      id: 0,
      nome: 'Ruth Johns',
      nascimento: new Date(
        'Tue Oct 24 2023 01:39:09 GMT-0300 (Brasilia Standard Time)'
      ),
      peso: 65,
      altura: 185,
      email: '1234@1234.com',
      senha: '1234',
    },
    {
      id: 1,
      nome: 'Mr. Ian Ruecker',
      nascimento: new Date(
        'Thu Jun 15 2023 14:57:17 GMT-0300 (Brasilia Standard Time)'
      ),
      peso: 75,
      altura: 145,
      email: '4321@4321.com',
      senha: '4321',
    },
  ];

  constructor() {}

  verify(email: String, senha: String) {
    let resp = this.users.find((x) => x.email == email && x.senha == senha);
    if (resp) localStorage.setItem('user', JSON.stringify(resp));
    return !!resp;
  }

  reset(email: String) {
    let resp = this.users.find((x) => x.email == email);
    if (resp) resp.senha = 'a1b2c4d4';
    this.save();
    return !!resp;
  }

  register(user: User) {
    let nextId = this.users.map((x) => x.id).reduce((p, n) => (p > n ? p : n));
    user.id = nextId++;
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
