import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast'; // Add other modules as needed
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [AppComponent, SideBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,  // Register PrimeNG modules
    ToastModule,   // Add any other required modules
    BrowserAnimationsModule, // Add this
    SidebarModule // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
