import { Component } from '@angular/core';

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
    messages= [{text: 'text', owner: 'Hassan'}, {text: 'my message', owner: 'User'}];
}