import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCurrencyModule } from "ngx-currency";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { Ng2OrderModule } from "ng2-order-pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,  
    NgxCurrencyModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
