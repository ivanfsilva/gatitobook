import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";

import { Observable } from "rxjs";
import { Animais, Animal } from "./animais";
import { TokenService } from "../autenticacao/token.service";

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor( private http: HttpClient, private tokenService: TokenService ) { }

  listaDoUsuario( nomeDoUsuario: string ): Observable<Animais> {
    return this.http.get<Animais>( `${ API }/${ nomeDoUsuario }/photos` );
  }

  buscaPorId( id: number ): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}` );
  }
}
