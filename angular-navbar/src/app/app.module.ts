import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DummyComponent } from './dummy/dummy.component';
import { HomeComponent } from './home/home.component';

// Angular Material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';  // Added MatFormFieldModule
import { MatInputModule } from '@angular/material/input';            // Added MatInputModule

// Bootstrap imports
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// BrowserAnimationsModule (needed for Angular Material animations)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Reactive Forms module (for Reactive Forms)
import { ReactiveFormsModule } from '@angular/forms';

// Import custom pipe
import { UppercasePipe } from './uppercase.pipe';  // Custom uppercase pipe
import { BantayGuard } from './bantay.guard';  // Import the guard
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    HomeComponent,
    UppercasePipe,  // Declare the UppercasePipe here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,            // Bootstrap modules
    NgbDropdownModule,
    BrowserAnimationsModule,  // For Angular Material animations
    MatToolbarModule,     // Angular Material Toolbar
    MatButtonModule,      // Angular Material Button
    MatIconModule,        // Angular Material Icon
    MatFormFieldModule,   // Angular Material Form Field
    MatInputModule,       // Angular Material Input
    ReactiveFormsModule,  // Angular Reactive Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
