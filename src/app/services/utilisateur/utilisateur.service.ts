import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateur } from '../../model/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  apiUrl = "http://localhost:9090/utilisateurs";

  constructor(private httpClient :  HttpClient) { }

  getAllUtilisateur(){
    return this.httpClient.get<Utilisateur[]>(this.apiUrl+"/all");
  }

  addUtilisateur(utilisateur : Utilisateur){
    return this.httpClient.post(this.apiUrl+"/add", utilisateur);
  }

  deleteUtilisateur(id:number){
    return this.httpClient.delete(this.apiUrl+"/delete/"+id);
  }

  updateUtilisateur(id:number, utilisateur:Utilisateur){
    return this.httpClient.put(this.apiUrl+"/update/"+id, utilisateur);
  }

}
