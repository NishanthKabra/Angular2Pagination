// todo: split
import { Injectable } from '@angular/core';

/** Provides default values for Pagination and pager components */
@Injectable()
export class PaginationConfig {
  public main: any = {
    maxSize: void 0,
    itemsPerPage: 10,
    boundaryLinks: false,
    directionLinks: false,
    firstText: 'First',
    previousText: 'Previous',
    nextText: 'Next',
    lastText: 'Last',
    pageBtnClass: '',
    rotate: false
  };
}