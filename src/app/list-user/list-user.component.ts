import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

   listUser : User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
       data => {
         this.listUser = data
       }
    )
  }

  getUserById(idUser : number) {
    this.userService.getById(idUser).subscribe(
      data => {
        console.log(data)
      }
    )
  }

  deleteUser(idUser : number) {
    this.userService.deleteUser(idUser).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
