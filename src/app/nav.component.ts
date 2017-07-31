import { AuthService } from './auth.service';
import { Component } from '@angular/core';
@Component({
    selector: 'nav',
    template: `
    <md-toolbar color="primary">
    <button md-button routerLink="/" > Message Board </button>
    <button md-button routerLink="/messages" > Messages </button>
    <span style="flex: 1 1 auto"></span>
    <button md-button *ngIf="!auth.isAuthenticated" routerLink="/register"> Register </button>
    <button md-button *ngIf="auth.isAuthenticated" routerLink="/"> Welcome {{auth.name}} </button>
    <button md-button *ngIf="auth.isAuthenticated" (click)="auth.logout()"> Logout </button>
    </md-toolbar>
    `
})
export class NavComponent {

    constructor(private auth: AuthService) { }
}