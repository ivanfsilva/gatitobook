import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comentario, Comentarios} from "./comentario";

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor( private http: HttpClient ) { }

  buscaComentario( id: number ): Observable<Comentarios> {
    return this.http.get<Comentarios>( `${API}/photos/${id}/comments`);
  }

  incluiComentario( id: number, commentText: string ): Observable<Comentario> {
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`, { commentText });
  }
}
