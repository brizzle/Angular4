import { Component } from '@angular/core';

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

  <div *ngIf="anotherTest; then tmpl1 else tmpl2">Yeah, I exist.</div>

  <div *ngIf="!anotherTest; then tmpl1 else tmpl2">Yeah, I exist.</div>

  <ng-template #tmpl1>This is template 1.<br/><br/></ng-template>

  <ng-template #tmpl2>This is template 2.<br/><br/></ng-template>

  <ng-template #otherTmpl>No, I do.<br/><br/></ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = ['him', 'hers', 'yours'];

  test = 'something';

  anotherTest = false;

}
