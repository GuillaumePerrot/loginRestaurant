import { Component, OnInit } from '@angular/core';
import { RoleService } from '../service/role.service';
import { Role } from '../model/role'
import { UserService } from '../service/user.service';
import { User } from '../model/user'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

   listRole : Role[] = [];
   newUser : User = new User();
   newRole : Role = new Role();

  constructor(private userService : UserService, private roleService : RoleService) { }

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(
      data => {
        this.listRole = data;
      }
    )
  }

  creationUser() {
    this.userService.createUser(this.newUser).subscribe(
       data => {
        console.log(data)
        
      }
    )
    }

}
