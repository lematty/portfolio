import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../models';
import { FeatureFlagService } from '../services';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  @Input() activePage: Page;

  Page = Page;
  hasHomePage = false;

  constructor(private featureFlagService: FeatureFlagService) {
    this.hasHomePage = this.featureFlagService.getFeatureFlag('hasHomePage');
  }

  ngOnInit(): void {
  }

}
