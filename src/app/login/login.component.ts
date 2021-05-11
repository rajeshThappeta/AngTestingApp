import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit,OnDestroy{

  constructor() { 
    console.log('login-constructor is executed')
  }

  ngOnInit(){
    
  }
  ngOnDestroy(){
    console.log("login component is destroyed")
  }

}
