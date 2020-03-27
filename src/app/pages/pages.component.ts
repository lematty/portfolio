import { Component, OnInit, Input } from '@angular/core';
import { Page } from '../models';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.less']
})
export class PagesComponent implements OnInit {
  @Input() activePage: Page;
  Page = Page;

  constructor() { }

  ngOnInit(): void {
  }

}
