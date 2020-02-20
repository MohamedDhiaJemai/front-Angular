import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Centre } from '../../model/Centre.model';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  apiUrl = "http://localhost:9090/centres";

  constructor(private httpClient: HttpClient) { }

  getAllCentre(){
    return this.httpClient.get<Centre[]>(this.apiUrl+"/all");
  }

  addCentre(centre : Centre){
    return this.httpClient.post(this.apiUrl+"/add", centre);
  }

  deleteCentre(id:number){
    return this.httpClient.delete(this.apiUrl+"/delete/"+id);
  }

  updateCentre(id:number, centre:Centre){
    return this.httpClient.put(this.apiUrl+"/update/"+id, centre);
  }

}
