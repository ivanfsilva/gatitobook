export interface Comentario {
  data: Date;
  text: string;
  userName: string;

}

export type Comentarios = Array<Comentario>;
