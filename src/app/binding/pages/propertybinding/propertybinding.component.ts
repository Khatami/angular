import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  constructor() { }

  Disabled:boolean = true;
  Text:string = "This is a text";
  
  changeValue() {
    alert(this.Text);
    this.Disabled = !this.Disabled;
    this.Text += "1";
  }

  ngOnInit(): void {
  }
}

//Property binding moves a value in one direction, from a component's property into a target element property.