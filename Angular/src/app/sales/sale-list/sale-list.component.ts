import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/sales.service';
import { Chart } from "chart.js";

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  constructor( private service : SalesService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
