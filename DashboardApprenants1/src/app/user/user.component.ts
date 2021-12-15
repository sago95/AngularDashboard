import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from '../service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  apprenantDetails = null as any;
  Apprenant = {
    id:"",
    nom:"",
    prenom:"",
    email:"",
    telephone:"",
    age:"",
    password:"",
    apprenant_status:"",
    login:"",
  }


  constructor(private app: Service) { 
    this.getAppDetails();
    
  }

  getAppDetails() {
    this.app.getApprenant().subscribe(
      (resp) => {
        console.log(resp);
        this.apprenantDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  register(registerForm: NgForm) {
    this.app.registerApprenant(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getAppDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteApprenant(apprenant: any) {
    this.app.deleteApprenant(apprenant.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAppDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(apprenant: any){
    this.Apprenant = apprenant;
  }

  updateApprenants(updateForm: NgForm){
    this.app.updateApprenant(this.Apprenant).subscribe(
      (resp) => {
        console.log(resp);
        updateForm.reset();
        this.getAppDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
