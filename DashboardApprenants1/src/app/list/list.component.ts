import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listApiUrl = '';
  list:any;
  entre:any;
  one:any;

  constructor(private http: HttpClient, private service: Service) { 
  }

  getAll() {
    this.listApiUrl = 'http://localhost:8080/listes';
    this.readAPI(this.listApiUrl)
      .subscribe((data) => {
        this.list = data;
        console.log(data);
      });
  }

  readAPI(URL: string){
    return this.http.get(URL);
  }

  intervalData(date:any) {
    this.service.dateInterval(date.dateDebut,date.dateFin).subscribe((data:any)=>{
      this.entre = data;
      console.log(data);
    })
  }

  getOne(data:any) {
    this.service.ListOne(data.nid).subscribe((data:any)=>{
      this.one = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
