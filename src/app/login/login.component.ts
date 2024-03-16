import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: String = '';
  senha: String = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    let resp = this.auth.verify(this.email, this.senha);
    if (resp) {
      // @ts-ignore
      UIkit.notification({
        message: 'Logado com sucesso!',
        status: 'success',
        pos: 'top-right',
        timeout: 1800,
      });
      setTimeout(() => this.router.navigate(['home']), 2000);
    } else {
      // @ts-ignore
      UIkit.notification({
        message: 'Falha em logar',
        status: 'danger',
        pos: 'top-right',
        timeout: 5000,
      });
    }
  }

  resetPass() {
    let resp = this.auth.reset(this.email);
    if (resp)
      // @ts-ignore
      UIkit.notification({
        message: 'Senha alterada com sucesso!!',
        status: 'success',
        pos: 'top-right',
        timeout: 2000,
      });
    else {
      // @ts-ignore
      UIkit.notification({
        message: 'Usuário não localizado!',
        status: 'danger',
        pos: 'top-right',
        timeout: 5000,
      });
    }
  }
}
