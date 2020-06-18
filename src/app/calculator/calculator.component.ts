import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  output: any;
  first: number;
  second: number;
  operator = '+';
  message = '';

  ngOnInit(): void {
  }

  calculate() {
    if (this.second && this.first) {
      this.message = ''
      switch (this.operator) {
        case '+':
          this.output = this.first + this.second;
          break;
        case '-':
          this.output = this.first - this.second;
          break;
        case '*':
          this.output = this.first * this.second;
          break;
        case '/':
          this.output = this.first / this.second;
          break;
      }
    } else {
      this.message = "hay nhap so con lai";
      this.output = '';
    }
  }
}
