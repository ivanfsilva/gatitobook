import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "./animal";
import {TokenService} from "../autenticacao/token.service";

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor( private http: HttpClient, private tokenService: TokenService ) { }

  listaDoUsuario( nomeDoUsuario: string ): Observable<Animal> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append( 'x-access-token', token );
    return this.http.get<Animal>( `${ API }/${ nomeDoUsuario }/photos`, {
      headers,
    } );
  }
}
