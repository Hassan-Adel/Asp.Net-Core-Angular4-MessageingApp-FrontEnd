import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: 'this is the messages component : <div *ngFor="let message of messages">{{message.text}} - By : {{message.owner}}<div>'
})
export class MessagesComponent{
    messages= [{text: 'text', owner: 'Hassan'}, {text: 'my message', owner: 'User'}];
}