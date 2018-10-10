import { Component, Input, Output, EventEmitter, forwardRef, OnChanges } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
