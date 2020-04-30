import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListUserComponent } from './list-user/list-user.component';

import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { ConnectionComponent } from './connection/connection.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [

  {
    path : "role",
    component : ListRoleComponent
  },
  {
    path : "user",
    component : ListUserComponent
  },
  {
    path : "createuser",
    component : CreateUserComponent
  },
  {
    path : "createrole",
    component : CreateRoleComponent
  },
  {
    path : "login",
    component : ConnectionComponent
  },
  {
    path : "acceuil",
    component : AcceuilComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
