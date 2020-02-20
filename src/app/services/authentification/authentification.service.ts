import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthentification } from '../../model/UserAuthentification.model';
//import {JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  apiUrl = "http://localhost:9090";

  private jwtToken=null;

  private roles:Array<any>=[];

  constructor(private httpClient : HttpClient) { }

  login( userAuthentification : UserAuthentification){
    return this.httpClient.post(this.apiUrl+"/login",userAuthentification,{observe:'response'});
  }

 /* saveToken(jwt:string){
    this.jwtToken=jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper = new JwtHelper();
    this.roles=jwtHelper.decodeToken(this.jwtToken).roles;
  }*/

  loadToken(){
    this.jwtToken=localStorage.getItem('token');
  }

  logout(){
    localStorage.clear();
  }

  


}
