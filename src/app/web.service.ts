import { async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from "@angular/material";
import { Subject } from 'rxjs/Rx';

@Injectable()

export class WebService {

    BASE_URL = 'http://localhost:22570/api';

    private messageStore: any[];

    // A subject allows observers to subscribe to it. And in this case, we can send our messages array through it whenever an update through an HTTP request occurs. 
    private messageSubject = new Subject();

    // Exposing the Observable instead of the subject for added security (you can pass data to subject but not observable)
    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private snackBarError: MdSnackBar) {
        this.getMessages(null);
    }

    /**
     * Now our Get Messages inside web service will no longer need to return a promise. 
     * But it will just await on the response so that we can then set its response to 
     * the Messages Array inside the web service.
     */
    getMessages(user: string) {
        // It uses a slash plus user name if the user is valid. Otherwise it will use an empty character if it's not valid. 
        user = (user) ? '/' + user : '';
        this.http.get(this.BASE_URL + '/messages' + user).subscribe(
            response => {
            this.messages = response.json();
            this.messageSubject.next(this.messages);
        }, error => {
            this.handleError("Unable to get messages")
        });
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