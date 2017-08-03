import { WebService } from './web.service';
import { Component } from '@angular/core';
@Component({
    selector: 'user',
    template: `
        <md-card class="mt-8">
            <md-input-container>
                <input [(ngModel)]="model.firstName" mdInput placeholder="First Name"/>
            </md-input-container>
             <md-input-container>
                <input [(ngModel)]="model.lastName" mdInput placeholder="Last Name"></input>
            </md-input-container>
            <button (click)="saveUser(model)" md-button color="primary">Save Changes</button>
        </md-card>
    `
})
export class UserComponent {

    model = {
        firstName:'',
        lastName:''
    }
    constructor(private webService: WebService) { }

    ngOninit(){
        this.webService.getUser().subscribe( res => {
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        })
    }

    saveUser(userData: any){
        this.webService.saveUser(userData).subscribe();
    }
}