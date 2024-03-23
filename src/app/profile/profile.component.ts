import { Component } from '@angular/core';

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

  // alterar() {}
  pesquisar() {}
}
