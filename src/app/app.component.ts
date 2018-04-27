import { Component } from '@angular/core';
import { person } from './person';
import { PersonSimple, Address } from './person-simple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person;
  personsimple = new PersonSimple();

  constructor() {
    this.person = person;

    this.personsimple.name = 'Joe';
    const address: Address = { street: '1409 Science Center Drive', city: 'Boise', state: 'ID', zip: '83702' };
    this.personsimple.addresses = [
      address
    ];

  }
}
