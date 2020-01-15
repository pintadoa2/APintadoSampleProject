import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { Chart } from 'chart.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { SaleComponent } from './Sales/sale/sale.component';
import { SaleListComponent } from './Sales/sale-list/sale-list.component';
import { SalesService } from './shared/sales.service';
import { WeatherService } from 'src/app/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SaleComponent,
    SaleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [SalesService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
