import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
export declare class CheckboxComponent implements OnInit {
    field: FieldConfig;
    group: FormGroup;
    constructor();
    ngOnInit(): void;
}
