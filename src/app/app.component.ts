import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import axios from 'axios';
import { AxiosInstance } from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client-contratos';
  /*
  axios.get('localhost:8080/')
  .then(response => console.log(respose))
  .catch(error => console.log(error) );
*/
}
