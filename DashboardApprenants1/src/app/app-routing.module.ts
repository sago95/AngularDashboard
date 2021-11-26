import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './list/list.component';
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
    path:'admin',
    component:AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
