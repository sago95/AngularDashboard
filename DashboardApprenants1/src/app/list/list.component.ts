import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listApiUrl = '';
  list:any;
  filteredString: string = '';


  constructor(private http: HttpClient) { 
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

  ngOnInit(): void {
  }

}
