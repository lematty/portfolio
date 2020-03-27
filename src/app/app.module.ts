import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent, ContactComponent, HomeComponent, PagesComponent, ProjectsComponent } from './pages';
import { FeatureFlagService } from './services';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    HomeComponent,
    NavBarComponent,
    PagesComponent,
    ProjectsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [FeatureFlagService],
  bootstrap: [AppComponent],
})
export class AppModule { }
