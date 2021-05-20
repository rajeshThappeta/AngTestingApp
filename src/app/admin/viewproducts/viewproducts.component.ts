import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/Mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Mobile[]=[];
  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }

}
