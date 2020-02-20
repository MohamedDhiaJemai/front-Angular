import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../../model/Role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl= "http://localhost:9090/roles";

  constructor(private httpClient:HttpClient) { }

  getAllRole(){
    return this.httpClient.get<Role[]>(this.apiUrl+"/all");
  }

  addRole(role : Role){
    return this.httpClient.post(this.apiUrl+"/add", role);
  }

  deleteRole(id:number){
    return this.httpClient.delete(this.apiUrl+"/delete/"+id);
  }

  updateRole(id:number, role:Role){
    return this.httpClient.put(this.apiUrl+"/update/"+id, role);
  }


}
