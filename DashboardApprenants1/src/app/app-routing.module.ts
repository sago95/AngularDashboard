import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
