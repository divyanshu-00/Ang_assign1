import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show=false;
  cnt=0;
  toggle()
  {
    this.cnt++;
    console.log(this.cnt);
    this.show=!this.show;
  }

}
