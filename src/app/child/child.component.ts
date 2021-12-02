import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() personDetail: any;
  @Output() childClick = new EventEmitter<string>();

  handleClickMe(){
    console.log("from child component: bitton 'Click Me', clicked.");
    //this.childClick.emit('foo');
    this.childClick.emit(this.personDetail.name);
  }

}
