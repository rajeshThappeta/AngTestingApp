import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Mobile } from 'src/app/models/Mobile.model';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  mobiles:Mobile[]=[];
  editMobileIndex;
  editMobileObj=new Mobile('','','')
  editMobileStatus:boolean=false;



  constructor(private dsObj:DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  
  getUsers(){
    this.dsObj.getMobilesData().subscribe(
      res=>{
        this.mobiles=res;
      },
      err=>{
        console.log("err in reading products",err)
      }
    )
  }

  //to edit mobile
  editMobile(mobileObj,ind){

   
    this.editMobileObj=mobileObj;
    this.editMobileIndex=ind;
    this.editMobileStatus=true;

    console.log('obj to be edited ',this.editMobileObj)
  }

  //save mobile after edit
  saveMobile(modifiedMobileObj){
    this.editMobileStatus=false;

    modifiedMobileObj.id=this.editMobileObj["id"];
    modifiedMobileObj.productImage=this.editMobileObj["productImage"];
   
    this.dsObj.updateMobile(modifiedMobileObj).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log("err in update ",err)
      }
    )
  }


 // @HostListener("click", ["$event"])

  //delete mobile
  deleteMobile(mobileObj){
   
    console.log("mobile to delete",mobileObj.id)
    this.dsObj.deleteMobile(mobileObj.id).subscribe(
      res=>{
        //write getting latest data from API
        this.getUsers();
        alert("Mobile deleted")
      },
      err=>{
        console.log("err in delete mobile",err)
      }
    )
  }
}
