import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-var',
  templateUrl: './child-var.component.html',
  styleUrls: ['./child-var.component.css']
})
export class ChildVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  transferData(){
    console.log("from child-var component, clicked.");
  }

  someProperty: any = "some data";
}
