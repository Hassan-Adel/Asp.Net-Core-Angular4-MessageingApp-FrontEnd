import { RegisterComponent } from './register.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { MessagesComponent } from './messages-component';
import { WebService } from './web.service';
import { NewMessageComponent } from "./new-message.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login.component";

var routes=[
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messages/:name', component: MessagesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpModule, MaterialModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ WebService, AuthService ]
})
export class AppModule { }
