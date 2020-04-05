import { Component } from '@angular/core';
import { Page } from './models';
import { FeatureFlagService } from './services/feature-flag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  activePage: Page = Page.About;
  hasHomePage = false;

  constructor(private featureFlagService: FeatureFlagService) {
    this.hasHomePage = this.featureFlagService.getFeatureFlag('hasHomePage');
    if (this.hasHomePage) {
      this.activePage = Page.Home;
    }
  }

  changePage(page: Page) {
    this.activePage = page;
  }
}
