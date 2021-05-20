import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Mobile } from '../models/Mobile.model';

@Component({
  selector: 'app-addnewmobile',
  templateUrl: './addnewmobile.component.html',
  styleUrls: ['./addnewmobile.component.css']
})
export class AddnewmobileComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  mobileModel=new Mobile('','','');

  onSubmitNewMobile(){
    
      this.dsObj.createNewMobile(this.mobileModel).subscribe(
        res=>{
          //navigate to viewmobiles component
          this.router.navigateByUrl("products/mobiles")

        },
        err=>{
          console.log('err in creating new mobile',err)
        }
      )
  }
}
