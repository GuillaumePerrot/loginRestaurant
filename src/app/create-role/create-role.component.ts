import { Component, OnInit } from '@angular/core';
import { RoleService } from '../service/role.service';
import { Role } from '../model/role'

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

listRole : Role[] = []
newRole : Role = new Role()

  constructor(private roleService : RoleService) { }

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(
      data => {
        this.listRole = data;
      }
    )
  }

  creationRole() {
    this.roleService.createRole(this.newRole).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
