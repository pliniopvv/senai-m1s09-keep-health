import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Cep } from '../model/cep';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  async get(cep: string) {
    return await firstValueFrom(this.http.get<Cep>(`http://viacep.com.br/ws/${cep}/json`));
  }
}
