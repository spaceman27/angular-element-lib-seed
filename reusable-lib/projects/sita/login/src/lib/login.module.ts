import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { DynamicFieldDirective } from './configurable/dynamic-field/dynamic-field.directive';

import { InputComponent } from "./configurable/input/input.component";
import { ButtonComponent } from "./configurable/button/button.component";
import { SelectComponent } from "./configurable/select/select.component";
import { DateComponent } from "./configurable/date/date.component";
import { RadiobuttonComponent } from "./configurable/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./configurable/checkbox/checkbox.component";
import { ToggleSwitchComponent } from "./configurable/toggle-switch/toggle-switch.component";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    ToggleSwitchComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    ToggleSwitchComponent
  ],
  exports: [LoginComponent]

})
export class LoginModule { }
