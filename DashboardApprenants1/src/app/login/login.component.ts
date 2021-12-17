import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Service } from '../service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user:any;

  constructor(private service: Service, private route: Router, private toast: ToastrService) { 
    this.user = JSON.parse(localStorage.getItem('Admin')!);
    if(this.user!==null){
      this.route.navigateByUrl('/user')
    }
  }

  logForm(form: { login: string; password: string; }){
    this.service.verification(form.login, form.password)
      .subscribe(
        (data:any)=> {
          if(data!==null){
            localStorage.setItem('Admin', JSON.stringify(data));
            this.route.navigateByUrl('/user');
          }else {
            this.ShowError();
          }
        }
      )

  }

  ShowError() {
    this.toast.error('Veuillez saisir les bons identifiants')
  }

  ngOnInit(): void {
  }

}
