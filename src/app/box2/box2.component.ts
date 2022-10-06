import { Component, OnInit } from '@angular/core';
// import { NgModule } from "@angular/core";
@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})

export class Box2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:string='';
  arr:any[]=[];
  color:string='black';
  public ind:number=0;
  add(val:string)
  {
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
   
  }
  // check(id:number)
  // {
  //   if(id %5 == 0)
  //   {
  //     this.color="blue";
  //   }
  //   else{
  //     this.color="white";
  //   }
  // }

}
