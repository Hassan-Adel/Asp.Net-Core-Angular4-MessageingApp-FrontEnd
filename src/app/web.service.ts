import { async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
    BASE_URL='http://localhost:22570/api';
    messages: any[];
    constructor(private http: Http) {
        this.getMessages();
    }

/**
 * Now our Get Messages inside web service will no longer need to return a promise. 
 * But it will just await on the response so that we can then set its response to 
 * the Messages Array inside the web service.
 */
    async getMessages() {
        var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
        this.messages = response.json();
    }
    async postMessage(message:any) {
        var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
        this.messages.push(response.json());
    }
}