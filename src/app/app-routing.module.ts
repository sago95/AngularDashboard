import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PasswordComponent } from './password/password.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'list',
    component:ListComponent
  },

  {
    path:'password',
    component:PasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
