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
  isNavbarOpen = false;

  ngOnInit(): void {}

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  changePage(page: Page): void {
    this.pageChange.emit(page);
    this.closeNavbar();
  }
}
