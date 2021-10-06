import {Component} from '@angular/core';

@Component({
  selector: 'app-exponentiation',
  template: `
    <div class="container">
      <p><b>1. The exponentiation task: </b></p>
      <div class="group">
        <label for="a">a: </label>
        <input type="number" id="a" [(ngModel)]="a">
      </div>
      <div class="group">
        <label for="b">b: </label>
        <input type="number" id="b" [(ngModel)]="b">
      </div>
      <p>The result is: <b>{{ getResult(this.a, this.b) }}</b></p>
    </div>
  `,
})

export class ExponentiationComponent {
  a: number = 2;
  b: number = 6;

  getResult(x: number, y: number) {
    return x ** y;
  }
}
