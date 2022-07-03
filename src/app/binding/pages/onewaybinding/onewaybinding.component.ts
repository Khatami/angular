import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {

  constructor() { }

  FirstName: string = "Seyedhamed";
  LastName:string = "Khatami";
  Age:Number = 30;

  changeValues():void{
    this.FirstName = "Fatemeh";
    this.LastName = "Seraj";
    this.Age = 25;
  }

  ngOnInit(): void {
  }
}
