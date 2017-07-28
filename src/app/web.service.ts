import { async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from "@angular/material";

@Injectable()
export class WebService {
    BASE_URL = 'http://localhost:22570/api';
    messages: any[];
    constructor(private http: Http, private snackBarError: MdSnackBar) {
        this.getMessages();
    }

    /**
     * Now our Get Messages inside web service will no longer need to return a promise. 
     * But it will just await on the response so that we can then set its response to 
     * the Messages Array inside the web service.
     */
    async getMessages() {
        try {
            var response = await this.http.get(this.BASE_URL + '/messages').toPromise();
            this.messages = response.json();
        } catch (error) {
            this.handleError("Unable to get messages");
        }

    }
    async postMessage(message: any) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }

    private handleError(error: any) {
        console.error(error);
        //close : add close button .. duration : disapear after 2 seconds
        this.snackBarError.open(error, 'close', { duration: 2000 });
    }
}