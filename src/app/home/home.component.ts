import { Component } from '@angular/core';
//import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';

@Component({
    'templateUrl': './home.component.html'
})

export class Home {
    pageTitle: string = "Welcome to pagination compnent demo";
    public page:number = 1;
    public itemsPerPage:number = 10;
    public maxSize:number = 5;
    public numPages:number = 1;
    public length:number = 100;
 
  public pageChangedEventSubscriber(outputsParams:any):void {
      console.log(outputsParams);
  }
  
  public numberOfPagesEventSubscriber(outputsParams:any){
      console.log(outputsParams);
  }
 
}