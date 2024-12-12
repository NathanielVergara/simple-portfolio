import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';  // Correct import for MatToolbarModule
import { MatButtonModule } from '@angular/material/button';    // Correct import for MatButtonModule
import { MatIconModule } from '@angular/material/icon';
import { DummyComponent } from './dummy/dummy.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule,
    BrowserAnimationsModule,
    MatToolbarModule,  // MatToolbarModule for mat-toolbar
    MatButtonModule,   // MatButtonModule for mat-button
    MatIconModule      // MatIconModule for mat-icon
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
