// request-add.component.ts

// request-add.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: RequestsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      FacultyName: ['', Validators.required ],
      BannerId: ['', Validators.required ],
      Destination: ['', Validators.required ],
      Purpose: ['', Validators.required ],
      StartDate: ['', Validators.required ],
      EndDate: ['', Validators.required ],
      CarSize: ['', Validators.required ],
      CarReason: ['', Validators.required ],
      FOPName: ['', Validators.required ],
      FOPComments: ['', Validators.required ],
      AdditionalNotes: ['', Validators.required ],
    });
  }

  addRequest(FacultyName, BannerId, Destination, Purpose, StartDate, EndDate, CarSize, CarReason, FOPName, FOPComments, AdditionalNotes) {
    this.ps.addRequest(FacultyName, BannerId, Destination, Purpose, StartDate, EndDate, CarSize, CarReason, FOPName, FOPComments, AdditionalNotes);
  }

  ngOnInit() {
  }

}
