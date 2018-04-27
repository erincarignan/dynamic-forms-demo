import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithDatamodelComponent } from './form-with-datamodel.component';

describe('FormWithDatamodelComponent', () => {
  let component: FormWithDatamodelComponent;
  let fixture: ComponentFixture<FormWithDatamodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithDatamodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithDatamodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
