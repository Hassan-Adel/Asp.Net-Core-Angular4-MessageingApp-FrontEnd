import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of messages">
    <md-card>
    {{message.text}} - By : {{message.owner}}
    </md-card>
    <div>
    `
})
export class MessagesComponent{
    messages= [{text: 'text', owner: 'Hassan'}, {text: 'my message', owner: 'User'}];
}