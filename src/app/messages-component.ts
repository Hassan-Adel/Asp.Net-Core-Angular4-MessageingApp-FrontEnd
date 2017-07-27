import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
        <md-card class="mt-8">
            <md-card-title>{{message.owner}}</md-card-title> 
            <md-card-content>{{message.text}}</md-card-content>
        </md-card>
    <div>
    `
})
export class MessagesComponent{

    constructor(private webService : WebService) {}

/*
If we try this without "async/await:, 
it would not work because it would just try to console log the promise 
not the response since inside web service we are returning a promise. 
And so what we need to do is wait for the response to come in through the promise.
 */
    async ngOnInit(){
        var response = await this.webService.getMessages();
        this.messages = response.json();
    }

    messages: any[];
}