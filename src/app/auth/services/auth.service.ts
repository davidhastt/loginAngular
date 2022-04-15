import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, Persona } from '../interfaces/interfaces';
import {catchError, map} from 'rxjs/operators';
import { of, tap } from 'rxjs';
import jwt_decode from "jwt-decode";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Persona

  constructor(private http: HttpClient) { }

  get usuario(){
    return {... this._usuario}
  }


  login(email: string, password: string){
  //console.log(this.baseUrl);
  const url = `${this.baseUrl}login`;//hacemos la peticion http
  const body = {email, password}

  return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp=>{
        if(resp.code = 200){
          //console.log(resp.message.Authorization);
          const token = resp.message.Authorization;
          const decoded: Persona = jwt_decode(token);
          //console.log(decoded);
          this._usuario={
            id_persona: decoded.id_persona,
            nombre: decoded.nombre,
            email: decoded.email,
            apaterno: decoded.apaterno,
            amaterno: decoded.amaterno,
            genero: decoded.genero,
            fecha_nac: decoded.fecha_nac,
            rol: decoded.rol

          }
          console.log(this._usuario);
      }

      }),
      map(resp => resp.code),
        catchError(err => of(err.error.message))
    )

}

}
