import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { PaginationComponent } from './home/pagination-demo.component';
import { PaginationConfig } from './home/pagination.config';



@NgModule({
  declarations: [
    AppComponent,
    Home,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome', component: Home},
      {path: '**', component: Home}
    ]),
  ],
  providers: [PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}