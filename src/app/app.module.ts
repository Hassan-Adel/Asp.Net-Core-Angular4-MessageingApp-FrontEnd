import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
