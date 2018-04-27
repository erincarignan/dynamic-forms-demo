import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { SimpleFormControlComponent } from './simple-form-control/simple-form-control.component';
import { SimpleFormGroupComponent } from './simple-form-group/simple-form-group.component';
import { SimpleFormBuilderComponent } from './simple-form-builder/simple-form-builder.component';
import { FormWithDatamodelComponent } from './form-with-datamodel/form-with-datamodel.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    SimpleFormControlComponent,
    SimpleFormGroupComponent,
    SimpleFormBuilderComponent,
    FormWithDatamodelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
