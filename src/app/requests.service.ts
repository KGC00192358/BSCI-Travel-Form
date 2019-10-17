// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  uri = 'http://localhost:4000/requests';

  constructor(private http: HttpClient) { }

  addRequest(FacultyName, BannerId, Destination, Purpose, StartDate, EndDate, CarSize, CarReason, FOPName, FOPComments, AdditionalNotes) {
    const obj = {
      FacultyName,
      BannerId,
      Destination,
      Purpose,
      StartDate,
      EndDate,
      CarSize,
      CarReason,
      FOPName,
      FOPComments,
      AdditionalNotes
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

getRequests() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
