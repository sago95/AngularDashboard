import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashboardApprenants1';

  constructor(private service: Service, private route: Router){

  }

  logForm(form: { login: string; password: string; }){
    this.service.verification(form.login, form.password)
      .subscribe(
        (data:any)=> {
          if(data!=null){
            localStorage.setItem('Admin', JSON.stringify(data));
            this.route.navigateByUrl('/user');
          }else {
            console.log('Veuillez entrer les bons identifiants !')
          }
        }
      )

  }
}
