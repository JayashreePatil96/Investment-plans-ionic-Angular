import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  plans:string; 
  perct:number;
  invest:boolean

  constructor(public navCtrl: NavController) {  
  }
  itemSelected(a,b) {
     this.perct=a;
     this.plans=b;
     this.invest=true;
  }

}
 
  
