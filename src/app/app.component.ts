import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  constructor(private http: HttpClient) {}
  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/pranay0064');
    obs.subscribe(response => console.log(response.login));
  }
}
