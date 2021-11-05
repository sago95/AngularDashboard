import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  closeResult:any;
  user:any;
  apprenantApiUrl = '';
  user1:any;
  formateurApiUrl= ''

  constructor(
    private http: HttpClient,
    private modalService: NgbModal) {
    this.apprenantApiUrl = 'http://localhost:8080/apprenants';
    this.readAPI(this.apprenantApiUrl)
      .subscribe((data) => {
        this.user = data;
        console.log(data);
      });
   this.formateurApiUrl = 'http://localhost:8080/formateur';
    this.readAPI1(this.formateurApiUrl)
      .subscribe((data1) => {
        this.user1 = data1;
        console.log(data1);
      });
   }

   readAPI(URL: string){
    return this.http.get(URL);
  }

  readAPI1(URL: string){
    return this.http.get(URL);
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
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
      return  `with: ${reason}`;
    }
  }

onSubmit(f: NgForm) {
  const url = 'http://localhost:8080/apprenants';
     this.http.post(url,f.value)
     .subscribe((result) => {
        this.ngOnInit();

     });
     this.modalService.dismissAll();
    }
     ngOnInit(): void {
   
    }
}

