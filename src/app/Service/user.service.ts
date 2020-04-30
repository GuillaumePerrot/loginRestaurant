import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  getAllUser() {
    return this.http.get<User[]>('http://localhost:8080/user/all').pipe()
 }

 getById(userId : number) {
   return this.http.get<User>('http://localhost:8080/user/' + userId).pipe()
 }

 deleteUser(userId : number) {
  return this.http.delete<User>('http://localhost:8080/user/delete/' +userId).pipe()
}

 createUser(user : User) {
   return this.http.post<User>('http://localhost:8080/user', user).pipe()
 }

 connexionUtilisateur(login : Login) {
   return this.http.post<User>('http://localhost:8080/user/connexion/adresseMail/password', login).pipe()
 }

}
