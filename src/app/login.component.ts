import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
@Component({
    selector: 'login',
    template: `
    <md-card class="mt-8">
    <form  [formGroup]="loginForm">
        <md-input-container>
            <input style="width:350px" [(ngModel)]="loginData.email" type="email" mdInput placeholder="Email" formControlName="email"/>
        </md-input-container>

        <md-input-container>
            <input style="width:350px" [(ngModel)]="loginData.password" type="password" mdInput placeholder="Password" formControlName="password"/>
        </md-input-container>
        <br>
        <button md-raised-button color="primary" (click)="login()">Login</button>
        </form>
    </md-card>
    `
})
export class LoginComponent {

    loginForm:any;

    constructor(private fromBuilder: FormBuilder,private auth: AuthService) {
        this.loginForm = fromBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
     }

    loginData = {
        email:'',
        password:''
    }

    login(){
        this.auth.login(this.loginData);
    }

}