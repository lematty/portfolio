import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  @Input() activePage: Page;
  @Output() pageChange: EventEmitter<Page> = new EventEmitter();

  Page = Page;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: Page) {
    this.pageChange.emit(page);
  }

}
