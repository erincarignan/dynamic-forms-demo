import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form-group',
  templateUrl: './simple-form-group.component.html',
  styleUrls: ['./simple-form-group.component.css']
})
export class SimpleFormGroupComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
