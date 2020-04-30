import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http : HttpClient) { }

  getAllRole() {
    return this.http.get<Role[]>('http://localhost:8080/role/all').pipe()
  }
 
  getById(idRole : number) {
    return this.http.get<Role>('http://localhost:8080/role/' + idRole).pipe()
  }

  deleteRole(idRole : number) {
     return this.http.delete<Role>('http://localhost:8080/role/delete/' + idRole).pipe()
   }

  createRole(role : Role) {
     return this.http.post<Role>('http://localhost:8080/role', role).pipe()
  }

}


