import { Component, OnInit } from '@angular/core';
import { RoleService } from '../service/role.service';
import { Role } from '../model/role';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  constructor(private roleService : RoleService) { }

     listRole : Role[] = [];

  ngOnInit(): void {
    this.roleService.getAllRole().subscribe(
      data => {
         this.listRole = data
      }
    )
  }

  getRoleById(idRole : number) {
    this.roleService.getById(idRole).subscribe(
      data => {
        console.log(data);
      }
    )
  } 

 deleteRole(idRole : number) {
   this.roleService.deleteRole(idRole).subscribe(
     data => {}
   )
 }

}
