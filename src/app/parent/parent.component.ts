import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person1 = {
    id: 1,
    name: 'John Smith',
    dob: '1/22/1980'
  }

  dataFromChild: string = "";

  handleChildClicked(x: string){
    console.log('parent received: ', x);
    this.dataFromChild = x;
  }

}

