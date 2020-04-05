import { Component } from '@angular/core';
import { Page } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  activePage: Page = Page.Home;

  changePage(page: Page) {
    this.activePage = page;
  }
}
