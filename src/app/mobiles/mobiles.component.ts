import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

    mobiles:Product[]=[];

  //inject obj of DataService class
    constructor(private dsObj:DataService){
    }
 
    ngOnInit(){
      //obj initialization logic
     this.mobiles= this.dsObj.getMobilesData();

    }
}
