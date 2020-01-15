import { Injectable } from '@angular/core';
import { Sales } from './sales.model';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  formData : Sales;


  list : Sales[];
  list2: Sales["Date"][];
  list3: Sales["Time"][];
  list4: Sales["Ammount"][];


  readonly rootURL ="https://localhost:44315/api"

  constructor(private http: HttpClient) { }


  getSales(){
    return this.http.get("https://localhost:44315/api/Sales")
    .map(result => result)
  }
  postSales(formData : Sales){
    return this.http.post(this.rootURL+'/Sales',formData);
  }


  refreshList(){
    this.http.get(this.rootURL+'/SalesData')
    .toPromise().then(res => this.list = res as Sales[]);
  }

  refreshDateList(){
    this.http.get(this.rootURL+'/SalesData')
    .toPromise().then(res => this.list2 = res as Sales["Date"][]);
  }
  refreshAmountList(){
    this.http.get(this.rootURL+'/SalesData')
    .toPromise().then(res => this.list4 = res as Sales["Ammount"][]);
  }
  refreshTimeList(){
    this.http.get(this.rootURL+'/SalesData')
    .toPromise().then(res => this.list3 = res as Sales["Time"][]);
  }

  dailySales(){
    return this.http.get(this.rootURL+'/SalesData')
    .map(result => result);

    
  }

}
