import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import {catchError, map} from 'rxjs/operators';
import { of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario

  constructor(private http: HttpClient) { }

  get usuario(){
    return {... this._usuario}
  }


  login(email: string, password: string){
  //console.log(this.baseUrl);
  const url = `${this.baseUrl}login`;
  const body = {email, password}

  return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp=>{
        if(resp.code = 200){
          console.log(resp.message.Authorization);
          const url = `${this.baseUrl}login`;
        /*this._usuario= {
          name: resp.name!,
          id: resp.id!;
        }*/
      }

      }),
      map(resp => resp.code),
        catchError(err => of(false))
    )

}

}
