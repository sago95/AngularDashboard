import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pipe } from '@angular/core';
@Pipe({name: 'filter'})
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  list: any;
  user: any;
  apprenantApiUrl: string;
  userList: any;
  userSave: any;
  fire: any;
  listSave: any;

  constructor(
    private http: HttpClient
    )
     {
    this.apprenantApiUrl = 'http://localhost:8080/listes';
    this.http.get(this.apprenantApiUrl)
     .subscribe((data) => {
        this.user = data;
        console.log(data);
      });
    }
    readAPI(URL: string){
      return this.http.get(URL);
    }
    ngOnInit(): void {
    }
  }