import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  nome: String = '';
  email: String = '';
  nascimento: Date = new Date();
  senha: String = '';
  senha2: String = '';

  constructor(private auth: AuthService) {}

  cadastrar() {
    if (this.senha == this.senha2) {
      let user = new User();
      user.nome = this.nome;
      user.email = this.email;
      user.nascimento = this.nascimento;
      user.senha = this.senha;

      this.auth.register(user);

      // @ts-ignore
      UIkit.notification({
        message: 'Usuário cadastrado com sucesso!!',
        status: 'success',
        pos: 'top-right',
        timeout: 2000,
      });
    } else {
      // @ts-ignore
      UIkit.notification({
        message: 'Senhas não conferem!',
        status: 'danger',
        pos: 'top-right',
        timeout: 5000,
      });
    }
  }
}
