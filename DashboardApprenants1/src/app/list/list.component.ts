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
  dat:any;
  wee:any;

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

  getOne(dat:any) {
    this.service.ListOne(dat.ide).subscribe((data:any)=>{
      this.one = data;
      console.log(data);
    })
  }

  getDate(date:any) {
    this.service.ListDate(date.mois).subscribe((data:any)=>{
      this.dat = data;
      console.log(data);
    })
  }

  getWeek(date:any) {
    this.service.ListWeek(date.semaine).subscribe((data:any)=>{
      this.wee = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
