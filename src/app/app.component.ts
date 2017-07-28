import { Component, ViewChild } from '@angular/core';
import{MessagesComponent} from './messages-component';
import { NewMessageComponent } from "./new-message.component";

@Component({
  selector: 'my-app',
  template: `
  <h1>Message Board</h1> 
  <new-message (onPosted)="myOnPosted($event)"></new-message>
  <messages></messages>
  `,
})
export class AppComponent  { 
  @ViewChild(MessagesComponent) messagesComponent:MessagesComponent;
  myOnPosted(message:any){
    this.messagesComponent.messages.push(message);
  }
 }
