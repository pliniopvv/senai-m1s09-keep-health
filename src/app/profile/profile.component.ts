import { Component } from '@angular/core';
import { AddressService } from '../services/address.service';
import { Cep } from '../model/cep';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  nome: String = '';
  email: String = '';

  peso: number = 0;
  altura: number = 0;
  // codigoUsuario: string = '';
  localizacao: string = '';

  nascimento: Date = new Date();
  senha: String = '';
  senha2: String = '';

  cep: Cep;

  constructor(private cepService: AddressService) {}

  // alterar() {}
  pesquisar() {
    this.cepService.get(this.localizacao).then((cep) => this.cep = cep);
  }
}
