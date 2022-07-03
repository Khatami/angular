import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  template: `
    <span> this is parent component</span>

    <div>{{ FullName }}</div>

    <child-item [Text]="FullName" (textChanged)="FullName = $event"></child-item>
  `,
})
export class SharingdataComponent implements OnInit {

  constructor() { }

  FullName = "Hamed Khatami";
  ngOnInit(): void {
  }
}

@Component({
  selector: 'child-item',
  template: `
    <div>{{ Text }}</div>

    <button class='btn btn-success' (click)="ChangeText()">Change Text</button>
  `,
  styles: [ 'div { color:red; }' ]
})
export class ChildItemComponent
{
    @Input() Text:string = "";
    @Output("textChanged") TextChanged = new EventEmitter<string>();

    ChangeText(){
      this.Text += "1";

      this.TextChanged.emit(this.Text);
    }
}