import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css'],
})
export class ParametrosComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const email = this.dataService.getEmail();

    console.log('email -> ', email);
  }
}
