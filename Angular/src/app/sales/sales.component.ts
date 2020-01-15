import { Component, OnInit } from '@angular/core';
import { SalesService } from '../shared/sales.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor( private service : SalesService) { }

  ngOnInit() {
    
  }

}
