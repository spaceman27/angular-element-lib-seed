import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn } from '@angular/forms';
import { FieldConfig } from "./field.interface";
export declare class LoginComponent implements OnInit, OnChanges {
    private fb;
    loginForm: FormGroup;
    fields: FieldConfig[];
    title: string;
    loginError: string;
    loginBgImage: string;
    submit: EventEmitter<any>;
    switch: boolean;
    constructor(fb: FormBuilder);
    ngOnChanges(c: any): void;
    ngOnInit(): void;
    onSubmit(event: Event): void;
    createControl(): FormGroup;
    bindValidations(validations: any): ValidatorFn;
    validateAllFormFields(formGroup: FormGroup): void;
}
