import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  userName: string;
  response: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {}
  Search() {
    this.http
      .get('https://api.github.com/users/' + this.userName)
      .subscribe(response => {
        this.response = response;
        console.log(response);
      });
  }
}
