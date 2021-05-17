import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private fsObj:FakedataService,private router:Router) { }

  ngOnInit(): void {
   this.mySubscription= this.fsObj.getPosts().subscribe(
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

  onSelectId(id){
    this.router.navigateByUrl('test/'+id)
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}
