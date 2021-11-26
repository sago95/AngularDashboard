import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
    this.getForDetails();
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

  registerf(registerFor: NgForm) {
    this.app.registerFormateur(registerFor.value).subscribe(
      (resp) => {
        console.log(resp);
        registerFor.reset();
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

  updateFormateurs(updateFor: NgForm){
    this.app.updateFormateur(this.Formateur).subscribe(
      (resp) => {
        console.log(resp);
        updateFor.reset();
        this.getForDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
