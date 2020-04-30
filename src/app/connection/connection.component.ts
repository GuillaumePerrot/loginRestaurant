import { Component, OnInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Login } from '../model/login';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  listUser : User[] = []
  newUser : User = new User()
  newLogin : Login = new Login()

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      data => {
        this.listUser = data;
      }
    )
  }

  connecionUser() {
    this.userService.connexionUtilisateur(this.newLogin).subscribe(
      data => {
        if (data) {
          console.log(data);
          this.newUser = data;
             

          localStorage.setItem("adresseMail", this.newUser.adresseMail);
          localStorage.setItem("role", this.newUser.role.role);
          localStorage.setItem("nomUser", this.newUser.nomUser);
          localStorage.setItem("prenomUser", this.newUser.prenomUser);

          Swal.fire({
            
            timer : 2000,
            icon: 'success',
            title: '',
            text: 'Bonjour ' + this.newUser.prenomUser,
            
          }).then(() =>
          window.location.href = 'http://localhost:4200/user')
        } else {
      
          Swal.fire({
            timer : 2000,
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          })
        }
       
        }
    )
      }

      
    
  }


