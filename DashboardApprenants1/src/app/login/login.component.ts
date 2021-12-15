import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: Service, private route: Router) { }

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

  ngOnInit(): void {
  }

}
