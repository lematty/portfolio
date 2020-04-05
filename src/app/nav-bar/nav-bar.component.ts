import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from '../models';
import { FeatureFlagService } from '../services';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  @Input() activePage: Page;
  @Output() pageChange: EventEmitter<Page> = new EventEmitter();

  Page = Page;

  hasHomePage = false;
  isNavbarOpen = false;

  constructor(private featureFlagService: FeatureFlagService) {
    this.hasHomePage = this.featureFlagService.getFeatureFlag('hasHomePage');
  }

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
