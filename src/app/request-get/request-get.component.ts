import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.css']
})
export class RequestGetComponent implements OnInit {

  requests: Request[];
  constructor(private ps: RequestsService) { }

  ngOnInit() {
    this.ps
      .getRequests()
      .subscribe((data: Request[]) => {
        this.requests = data;
    });
  }

}
