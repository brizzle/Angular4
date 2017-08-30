import { Component } from '@angular/core';
import { DataService } from './data.service';

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
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

  constructor(private dataService:DataService) {

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
