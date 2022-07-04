import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css'],
  providers: [HttpService]
})
export class CommunicationComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
}