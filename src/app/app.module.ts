import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
         MatIconModule, 
         MatListModule,
         MatCardModule,
         MatButtonModule        
       } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ChatWindowComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
