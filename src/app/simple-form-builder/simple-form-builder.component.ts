import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-simple-form-builder',
  templateUrl: './simple-form-builder.component.html',
  styleUrls: ['./simple-form-builder.component.css']
})
export class SimpleFormBuilderComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
      street: ''
    });
  }

  ngOnInit() {
  }

}
