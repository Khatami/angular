import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  constructor() { }

  FirstName: string = "Seyedhamed";
  LastName: string = "Khatami";
  Age: Number = 30;

  ngOnInit(): void {
  }
}
