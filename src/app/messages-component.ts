import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <md-card class="mt-8">
            <md-card-title [routerLink]="['/messages', message.owner]" class="cursor">{{message.owner}}</md-card-title> 
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    <div>
    `
})
export class MessagesComponent {

    messages:any;

    constructor(private webService: WebService, private route: ActivatedRoute) { }
    ngOnInit(){
             var name = this.route.snapshot.params.name;
             this.webService.getMessages(name);
             // Subscribing to the subject in the webService so we'll get the messages array through it
             this.webService.messageSubject.subscribe(incommingMessages => {
                 this.messages = incommingMessages;
             });
        }
}