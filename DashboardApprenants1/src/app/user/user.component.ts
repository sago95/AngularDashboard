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

  formateurDetails = null as any;
  Formateur = {
    id:"",
    nom:"",
    prenom:"",
    email:"",
    password:"",
    login:"",
    genre:"",
  }

  constructor(private app: Service) { 
    this.getAppDetails();
    this.getForDetails();
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

  updateApprenants(){
    this.app.updateApprenant(this.Apprenant).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getForDetails() {
    this.app.getFormateur().subscribe(
      (resp) => {
        console.log(resp);
        this.formateurDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  registerf(registerForm: NgForm) {
    this.app.registerFormateur(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getForDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteFormateurs(formateur: any) {
    this.app.deleteFormateur(formateur.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getForDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editf(formateur: any){
    this.Formateur = formateur;
  }

  updateFormateurs(){
    this.app.updateFormateur(this.Formateur).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }




  ngOnInit(): void {
  }

}
