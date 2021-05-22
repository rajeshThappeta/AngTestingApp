import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(): boolean{

    if(localStorage.getItem("username")==null){
      alert("Plz login to continue....");
      this.router.navigateByUrl("/login")
      return false;
    }
    else{
      return true;
    }
    
  }
  
}
