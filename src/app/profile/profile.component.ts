import { Component } from '@angular/core';
import { AddressService } from '../services/address.service';
import { Cep } from '../model/cep';
import { User } from '../model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  nome: String = '';
  email: String = '';
  peso: number = 0;
  altura: number = 0;
  // codigoUsuario: string = '';
  nascimento: Date = new Date();
  senha: String = '';
  senha2: String = '';

  localizacao: string = '';
  cep: Cep;

  constructor(private cepService: AddressService) {
    let user = JSON.parse(localStorage.getItem('user')) as User;
    if (user) {
      this.nome = user.nome;
      this.email = user.email;
      this.peso = user.peso;
      this.altura = user.altura;
      this.nascimento = user.nascimento;
    }
  }

  // alterar() {}
  pesquisar() {
    this.cepService.get(this.localizacao).then((cep) => (this.cep = cep));
  }
}
