import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})

export class Box2Component implements OnInit {
  // login:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  // login=new FormGroup({
  //   inpu:new FormControl(''),
    
  //   });


  name:string='';
  value:string='';
  arr:any[]=[];
  color:string='black';
  public ind:number=0;
  add(val:string)
  {
    if(val.length == 0)
    {
      console.log("Please enter vvalid input");
    }
    else{
    console.log("hello");
    console.log(val);
    this.ind++;
    this.arr.push({id:this.arr.length, item:val});
    console.log(this.arr);
    if(this.ind %5 == 0)
    {
      this.color='blue';
    }
    else{
      this.color='black';
    }
    this.name='';
  }
   
  }

  

}
