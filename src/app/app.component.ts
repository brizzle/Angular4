import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>Hey guys!</h1>
  <p>{{ myObject.gender }}</p>

  <ul>
    <li *ngFor="let arr of myArr">{{ arr }}</li>
  </ul>

  <ul>
    <li *ngIf="myArr">Yeah, I exist.</li>
  </ul>

  <ul>
    <li *ngIf="test == 'something'">Yeah, I exist.</li>
  </ul>

  <div *ngIf="anotherTest; else otherTmpl">Yeah, I exist.</div>

  <div *ngIf="anotherTest; then tmpl1 else tmpl2"></div>

  <div *ngIf="!anotherTest; then tmpl1 else tmpl2"></div>

  <div *ngIf="displayPropertyBinding; then propertyBinding"></div>

  <div *ngIf="true; then animationTmpl"></div>

  <ng-template #tmpl1>This is template 1. (TRUE)<br/><br/></ng-template>

  <ng-template #tmpl2>This is template 2. (FALSE)<br/><br/></ng-template>

  <ng-template #otherTmpl>No, I do.<br/><br/></ng-template>

  <ng-template #propertyBinding>
    <img src="{{ angularLogo }}">
    <img [src]="angularLogo">
    <img bind-src="angularLogo">
    <button [disabled]="buttonStatus">My Button</button>
    <button (click)="myEvent($event)">My Event Button</button>
    <p>{{ someProperty }}</p>
  </ng-template>

  <ng-template #animationTmpl>
    <p [@myAnimation]='state' (click)="animateMe()">I will animate</p>
  </ng-template>

  `,
  //styleUrls: ['./app.component.css'],
  styles: [`
    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }
  `],
  animations: [
    trigger('myAnimation', [

      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  //title = 'app';

  state: string = 'small';

  constructor(private dataService:DataService) {

  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  someProperty:string = ' ';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }


  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours'];

  test = 'something';

  anotherTest = false;

  displayPropertyBinding = true;

  angularLogo = 'https://angular.io.resources/images/logos/angular2/angular.png';

  buttonStatus = false;

  myEvent(event) {
    console.log(event);
  }
}
