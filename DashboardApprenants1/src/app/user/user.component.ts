import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
  closeResult: string | undefined;  

  constructor(private app: Service, private modalService: NgbModal, private toast: ToastrService) { 
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
        this.ShowConf1();
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
        this.ShowConf2();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  open(content: any, apprenant:any) {  
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {  
      this.closeResult = `Closed with: ${result}`;  
      if (result === 'yes') {  
        this.deleteApprenant(apprenant);
        this.ShowConf();  
      }  
    }, (reason) => {  
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;  
    });  
  }
  
  private getDismissReason(reason: any): string {  
    if (reason === ModalDismissReasons.ESC) {  
      return 'by pressing ESC';  
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {  
      return 'by clicking on a backdrop';  
    } else {  
      return `with: ${reason}`;  
    }  
  }

  ShowConf() {
    this.toast.success("Apprenant supprimé(e) avec succès !")
  }

  ShowConf1() {
    this.toast.success("Apprenant ajouté(e) avec succès !")
  }

  ShowConf2() {
    this.toast.success("Apprenant modifié(e) avec succès !")
  }

  ngOnInit(): void {
  }

}
