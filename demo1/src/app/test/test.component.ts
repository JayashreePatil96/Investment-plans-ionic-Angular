import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  amount:number;
  years:number;
  return_amount = 0
  hide:boolean;
 
   constructor() { }
  ngOnInit() {}
  @Input() plan:string; 
  @Input() perc:number;
 Calculate(){
    console.log(this.perc);
    console.log(this.plan);
    let interest = ((this.perc/100) * this.amount) * this.years
    this.return_amount = (this.amount)+ interest
    this.hide=true;
    
  }
}
