import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from "@angular/material";
import { Subject } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()

export class WebService {

    BASE_URL = 'http://localhost:22570/api';

    private messageStore: any[];

    // A subject allows observers to subscribe to it. And in this case, we can send our messages array through it whenever an update through an HTTP request occurs. 
    private messageSubject = new Subject();

    // Exposing the Observable instead of the subject for added security (you can pass data to subject but not observable)
    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private snackBarError: MdSnackBar, private auth: AuthService) {
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
            this.messageStore = response.json();
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.handleError("Unable to get messages")
        });
    }

    /**
     * So we're not using messageSubject to get a new value such as our new message but 
     * we are using it in order to get the postMessage event as its being broadcasted. 
     * But in the case where the value being broadcasted wasn't the memory address, 
     * it would be useful or on the case where second observers subscribes after the 
     * first value is broadcasted they would need to know of any new message posts, 
     * so we would have to call messageSubject.next as we are now
     * @param message 
     */
    async postMessage(message: any) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }

    getUser(){
        return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeaders).map(res => res.json());
    }

    private handleError(error: any) {
        console.error(error);
        //close : add close button .. duration : disapear after 2 seconds
        this.snackBarError.open(error, 'close', { duration: 2000 });
    }
}