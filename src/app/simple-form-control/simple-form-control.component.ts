import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form-control',
  templateUrl: './simple-form-control.component.html',
  styleUrls: ['./simple-form-control.component.css']
})
export class SimpleFormControlComponent implements OnInit {

  name = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
