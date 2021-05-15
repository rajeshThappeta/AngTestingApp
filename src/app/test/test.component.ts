import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit ,OnDestroy{

  mySubscription:Subscription;

  myPosts:Post[]=[];

  users;
  //inject Fakedata service object
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getUsers().subscribe(
      userData=>{
        //assign posts
        this.users=userData;
        console.log(this.users)
       
      },
      err=>{
        console.log("err in getting posts data",err)
      }

    )
  }



  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}
