import { NavComponent } from './nav.component';
import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';
import { WebService } from './web.service';
import { NewMessageComponent } from "./new-message.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, HttpModule, MaterialModule, BrowserAnimationsModule, FormsModule ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WebService ]
})
export class AppModule { }
