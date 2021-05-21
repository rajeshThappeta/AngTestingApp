import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsComponent } from './products/products.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Mobile } from './models/Mobile.model';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }


  //to read all mobiles data
    getMobilesData():Observable<Mobile[]>{
        //http get
       return this.hc.get<Mobile[]>("http://localhost:3000/mobiles")
    }
  
    //to save /create new mobile
    createNewMobile(mobileObj):Observable<any>{
      return this.hc.post("http://localhost:3000/mobiles",mobileObj)
    }

    //update mobile
    updateMobile(modifiedMobileOj):Observable<any>{
      return this.hc.put("http://localhost:3000/mobiles/"+modifiedMobileOj.id,modifiedMobileOj)
    }

    //delete mobile
    deleteMobile(id):Observable<any>{
      console.log("id is ",id)
      return this.hc.delete("http://localhost:3000/mobiles/"+id)
    }
}

