import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/shared/sales.service'
import { NgForm } from '@angular/forms';
import { Chart } from 'chart.js';
import { Observable, Subject, from } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { Sales } from 'src/app/shared/sales.model';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  chart = []
  constructor(private service : SalesService) { }

  ngOnInit() {

    
    this.service.dailySales()
    .subscribe((res:any) => {
      console.log(res)
      let DateDataSet = res.map(Sales => Sales.Date);
      let TimeDataSet = res.map(Sales => Sales.Time);
      let AmmountsDataSet = res.map(Sales => Sales.Ammount);
      // // console.log(Dte)
      // let DateDataSet = res['SalesData'].map((res:any) => res.SalesData.Date);
      // let TimeDataSet = res['SalesData'].map((res:any) => res.SalesData.Time);
      // let AmmountsDataSet = res['SalesData'].map((res:any) => res.SalesData.Ammount);
      console.log(DateDataSet)
      console.log(TimeDataSet)
      console.log(AmmountsDataSet)

 

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: TimeDataSet,
          datasets: [
            { 
              data: TimeDataSet,
              borderColor: "#3cba9f",
              fill: false
            },
            { 
              data:AmmountsDataSet,
              borderColor: "#ffcc00",
              fill: true
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });

 
      let TimeData = map(res => res);
      let AmmountData = res['list'].map(res => res.SalesData.Ammount);
      
      // console.log(TimeData)
      // console.log(AmmountData)
    })
   
    
    this.service.refreshAmountList();
    this.service.refreshDateList();
    this.service.refreshTimeList();

    this.resetForm();
    let Ammounts= [this.service.formData]

    let Dates= [this.service.list2]
    let Times=[this.service.formData.Time]
    

    
    // let salesDates = Sales["Date"];
    // let Time = Sales["Time"];
    let Amt = Sales["Ammounts"];

   

    // this.service.getSalesData().subscribe((sales:Sales[]) => {
    //   this.sales = sales;
    //   console.log(sales)
    // })
  

    // this.service.dailySales()
    // .subscribe(res => { return {"Date": res.Date}
    //   console.log(res)
      

      

      
    

      
    // })
  
      
      
     
  }
  //////
  resetForm(form? : NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      id:'',
      Date: '',
      Time: '',
      Ammount:'',

    }
    

  }

  onSubmit(form:NgForm){
    this.insertRecord(form);

  }
  
  insertRecord(form: NgForm){
    this.service.postSales(form.value).subscribe(res => {
      this.resetForm(form)
    })
  }

}
