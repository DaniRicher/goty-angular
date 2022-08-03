import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';

const baseUrl =  environment.url;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor( private http: HttpClient ) { }

  getNominados() {

    if( this.juegos.length > 0 ) {

      //No hay juegos
      return of( this.juegos );

    } else {
      return this.http.get<Game[]>(`${ baseUrl }/api/goty`)
              .pipe(
                tap(
                  juegos => this.juegos = juegos
                )
              );
    }

  }

  votarJuego( id: string ) {

    return this.http.post(`${ baseUrl }/api/goty/${ id }`, {} )
            .pipe(
              catchError( err => {
                return of( err.error )
              })
            );

  }

}
