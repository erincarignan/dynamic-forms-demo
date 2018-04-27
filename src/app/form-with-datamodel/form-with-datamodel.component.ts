import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Address } from '../person-simple';

@Component({
  selector: 'app-form-with-datamodel',
  templateUrl: './form-with-datamodel.component.html',
  styleUrls: ['./form-with-datamodel.component.css']
})
export class FormWithDatamodelComponent implements OnInit {

  @Input() personObject;
  form: FormGroup;

  constructor(private fb: FormBuilder) {


  }

  ngOnInit() {

    console.log(this.personObject);

    this.form = this.fb.group({
      name: this.personObject.name,
      address: this.fb.group(this.personObject.addresses[0])
    });

  }

}
