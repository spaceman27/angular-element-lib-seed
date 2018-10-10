import { Component, Input, Output, EventEmitter, NgModule, ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatCommonModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatLineModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatPseudoCheckboxModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} fb
     */
    constructor(fb) {
        this.fb = fb;
        this.fields = [];
        this.submit = new EventEmitter();
    }
    /**
     * @param {?} c
     * @return {?}
     */
    ngOnChanges(c) {
        console.log(c);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof this.fields === 'string') {
            // REACT COMPAT FIX: try to convert string back to array
            this.fields = JSON.parse(this.fields);
        }
        /** @type {?} */
        const email = this.fields.find(r => r.name === 'email');
        if (email && !email.validations) {
            email.validations = [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Email Required"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
                    message: "Invalid email"
                }
            ];
        }
        /** @type {?} */
        const username = this.fields.find(r => r.name === 'username');
        if (username && !username.validations) {
            username.validations = [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Name Required"
                },
                {
                    name: "pattern",
                    validator: Validators.pattern("^[a-zA-Z]+$"),
                    message: "Accept only text"
                }
            ];
        }
        /** @type {?} */
        const password = this.fields.find(r => r.name === 'password');
        if (password && !password.validations) {
            password.validations = [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Password Required"
                }
            ];
        }
        /** @type {?} */
        const dob = this.fields.find(r => r.name === 'dob');
        if (dob && !dob.validations) {
            dob.validations = [
                {
                    name: "required",
                    validator: Validators.required,
                    message: "Date of Birth Required"
                }
            ];
        }
        this.loginForm = this.createControl();
        /** @type {?} */
        const theWitchName = this.fields.find(r => r.name === 'ldap');
        this.loginForm.valueChanges.subscribe(r => {
            if (theWitchName) {
                this.switch = this.loginForm.get(theWitchName.name).value;
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.loginForm.valid) {
            this.submit.emit(this.loginForm.value);
        }
        else {
            this.validateAllFormFields(this.loginForm);
        }
    }
    /**
     * @return {?}
     */
    createControl() {
        /** @type {?} */
        const group = this.fb.group({});
        this.fields.forEach(field => {
            if (field.type === "button")
                return;
            /** @type {?} */
            const control = this.fb.control(field.value, this.bindValidations(field.validations || []));
            group.addControl(field.name, control);
        });
        return group;
    }
    /**
     * @param {?} validations
     * @return {?}
     */
    bindValidations(validations) {
        if (validations.length > 0) {
            /** @type {?} */
            const validList = function* (array) {
                for (var item of array) {
                    yield item.validator;
                }
            };
            return Validators.compose(Array.from(validList(validations)));
        }
        return null;
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            /** @type {?} */
            const control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
        });
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'sita-login',
                template: `<div [ngStyle]='{ "background-image": loginBgImage}' fxFill fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="1.5rem" class="mat-typography">
  <div>
    <h1 fxLayoutAlign="center"> {{title}} </h1>
    <div fxLayout="row" fxLayoutAlign="center center" fxLayoutGap="2rem">
      <div class="language-selector">
        <ng-content select="[login-lang]"></ng-content>
      </div>
    </div>
  </div>
  <div class="login-container" fxLayout="row" fxLayoutAlign="center">    
    <mat-card fxFlex="90%" fxFlex.sm="66%" fxFlex.md="50%" fxFlex.gt-md="33%" class="login-box">
      <label class="login-error" *ngIf="loginError"> {{loginError}} </label>
      <form (ngSubmit)="onSubmit($event)" [formGroup]="loginForm" novalidate>
          <ng-container *ngFor="let field of fields;" >
              <ng-container *ngIf="switch && field.name !== 'username' && field.name !== 'password'" dynamicField [field]="field" [group]="loginForm">

              </ng-container>
              <ng-container *ngIf="!switch" dynamicField [field]="field" [group]="loginForm">

              </ng-container>
          </ng-container>
      </form>
    </mat-card>
  </div>
</div>

`,
                styles: [`:host{display:flex;flex:1;background-color:#f5f5f5}.inline-loader{display:inline-block}.version{margin:0}.login-container,.mat-form-field{width:100%}.login-error{color:red;text-align:center;width:100%}`]
            },] },
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder }
];
LoginComponent.propDecorators = {
    fields: [{ type: Input }],
    title: [{ type: Input }],
    loginError: [{ type: Input }],
    loginBgImage: [{ type: Input }],
    submit: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatCommonModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatDividerModule,
                    MatExpansionModule,
                    MatFormFieldModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatLineModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatOptionModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatPseudoCheckboxModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSlideToggleModule,
                    MatSliderModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatStepperModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: "app-input",
                template: `
<mat-form-field style="display:block" [formGroup]="group">
  <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
  <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
    <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
  </ng-container>
</mat-form-field>
`,
                styles: []
            },] },
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: "app-button",
                template: `
<div [formGroup]="group" [ngStyle]="{'text-align': field.textAlign}">
  <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
</div>
`,
                styles: []
            },] },
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: "app-select",
                template: `
<mat-form-field style="display:block" [formGroup]="group">
  <mat-select [placeholder]="field.label" [formControlName]="field.name">
    <mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
  </mat-select>
</mat-form-field>
`,
                styles: []
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DateComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DateComponent.decorators = [
    { type: Component, args: [{
                selector: "app-date",
                template: `
<mat-form-field class="demo-full-width margin-top" [formGroup]="group">
<input matInput [matDatepicker]="picker" [formControlName]="field.name" [placeholder]="field.label">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker #picker></mat-datepicker>
<mat-hint></mat-hint>
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`,
                styles: []
            },] },
];
/** @nocollapse */
DateComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class RadiobuttonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
RadiobuttonComponent.decorators = [
    { type: Component, args: [{
                selector: "app-radiobutton",
                template: `
<div class="demo-full-width margin-top" [formGroup]="group">
<label class="radio-label-padding">{{field.label}}:</label>
<mat-radio-group [formControlName]="field.name">
<mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
</mat-radio-group>
</div>
`,
                styles: []
            },] },
];
/** @nocollapse */
RadiobuttonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "app-checkbox",
                template: `
<div [formGroup]="group" >
<mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
</div>
`,
                styles: []
            },] },
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToggleSwitchComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ToggleSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-toggle-switch',
                template: `<div [formGroup]="group" [ngStyle]="{'text-align': field.textAlign}">
    <label class="ldap-container">
        <span class="ldap-text"> {{field.label}} </span>
    </label>
    <label class="bs-switch">
        <input type="checkbox" [formControlName]="field.name" />
        <span class="slider round"></span>
    </label>
</div>`,
                styles: [`.bs-switch{position:relative;display:inline-block;width:60px;height:34px}.bs-switch input{display:none}.bs-switch input:checked+.slider{background-color:#2196f3}.bs-switch input:checked+.slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}.bs-switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.bs-switch .slider:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.bs-switch .slider.round{border-radius:34px}.bs-switch .slider.round:before{border-radius:50%}[type=checkbox]:checked,[type=checkbox]:not(:checked),mat-checkbox:checked,mat-checkbox:not(:checked){position:absolute;opacity:0;pointer-events:none}.ldap-text{position:absolute;right:0;bottom:0}.ldap-container{position:relative;display:inline-block;width:100px;height:34px}`]
            },] },
];
/** @nocollapse */
ToggleSwitchComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    date: DateComponent,
    radiobutton: RadiobuttonComponent,
    checkbox: CheckboxComponent,
    switch: ToggleSwitchComponent
};
class DynamicFieldDirective {
    /**
     * @param {?} resolver
     * @param {?} container
     */
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }
}
DynamicFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dynamicField]"
            },] },
];
/** @nocollapse */
DynamicFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicFieldDirective.propDecorators = {
    field: [{ type: Input }],
    group: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class LoginModule {
}
LoginModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { LoginComponent, LoginModule, ButtonComponent as ɵd, CheckboxComponent as ɵh, DateComponent as ɵf, DynamicFieldDirective as ɵb, InputComponent as ɵc, RadiobuttonComponent as ɵg, SelectComponent as ɵe, ToggleSwitchComponent as ɵi, MaterialModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0YS1sb2dpbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNpdGEvbG9naW4vbGliL2xvZ2luLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL2NvbmZpZ3VyYWJsZS9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL2NvbmZpZ3VyYWJsZS9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac2l0YS9sb2dpbi9saWIvY29uZmlndXJhYmxlL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvZHluYW1pYy1maWVsZC9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL2xvZ2luLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi9maWVsZC5pbnRlcmZhY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaXRhLWxvZ2luJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtuZ1N0eWxlXT0neyBcImJhY2tncm91bmQtaW1hZ2VcIjogbG9naW5CZ0ltYWdlfScgZnhGaWxsIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBmeExheW91dEdhcD1cIjEuNXJlbVwiIGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgPGRpdj5cbiAgICA8aDEgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPiB7e3RpdGxlfX0gPC9oMT5cbiAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIiBmeExheW91dEdhcD1cIjJyZW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYW5ndWFnZS1zZWxlY3RvclwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbG9naW4tbGFuZ11cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsb2dpbi1jb250YWluZXJcIiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj4gICAgXG4gICAgPG1hdC1jYXJkIGZ4RmxleD1cIjkwJVwiIGZ4RmxleC5zbT1cIjY2JVwiIGZ4RmxleC5tZD1cIjUwJVwiIGZ4RmxleC5ndC1tZD1cIjMzJVwiIGNsYXNzPVwibG9naW4tYm94XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJsb2dpbi1lcnJvclwiICpuZ0lmPVwibG9naW5FcnJvclwiPiB7e2xvZ2luRXJyb3J9fSA8L2xhYmVsPlxuICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KCRldmVudClcIiBbZm9ybUdyb3VwXT1cImxvZ2luRm9ybVwiIG5vdmFsaWRhdGU+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZmllbGRzO1wiID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN3aXRjaCAmJiBmaWVsZC5uYW1lICE9PSAndXNlcm5hbWUnICYmIGZpZWxkLm5hbWUgIT09ICdwYXNzd29yZCdcIiBkeW5hbWljRmllbGQgW2ZpZWxkXT1cImZpZWxkXCIgW2dyb3VwXT1cImxvZ2luRm9ybVwiPlxuXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN3aXRjaFwiIGR5bmFtaWNGaWVsZCBbZmllbGRdPVwiZmllbGRcIiBbZ3JvdXBdPVwibG9naW5Gb3JtXCI+XG5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9tYXQtY2FyZD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4OjE7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5pbmxpbmUtbG9hZGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrfS52ZXJzaW9ue21hcmdpbjowfS5sb2dpbi1jb250YWluZXIsLm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCV9LmxvZ2luLWVycm9ye2NvbG9yOnJlZDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDAlfWBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBcbiAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGZpZWxkczogRmllbGRDb25maWdbXSA9IFtdO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dpbkVycm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ2luQmdJbWFnZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHN3aXRjaDogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcbiAgICBcbiAgfVxuICBuZ09uQ2hhbmdlcyhjOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhjKTtcbiAgfVxuICBuZ09uSW5pdCgpIHsgXG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpZWxkcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFJFQUNUIENPTVBBVCBGSVg6IHRyeSB0byBjb252ZXJ0IHN0cmluZyBiYWNrIHRvIGFycmF5XG4gICAgICB0aGlzLmZpZWxkcyA9IEpTT04ucGFyc2UodGhpcy5maWVsZHMpO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgdmFsaWRhdGlvbiBmb3IgZW1haWxcbiAgICBjb25zdCBlbWFpbCA9IHRoaXMuZmllbGRzLmZpbmQociA9PiByLm5hbWUgPT09ICdlbWFpbCcpO1xuICAgIGlmIChlbWFpbCAmJiAhZW1haWwudmFsaWRhdGlvbnMpIHtcbiAgICAgIGVtYWlsLnZhbGlkYXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICBtZXNzYWdlOiBcIkVtYWlsIFJlcXVpcmVkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicGF0dGVyblwiLFxuICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5wYXR0ZXJuKFxuICAgICAgICAgICAgXCJeW2EtejAtOS5fJSstXStAW2EtejAtOS4tXSsuW2Etel17Miw0fSRcIlxuICAgICAgICAgICksXG4gICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsXCJcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IHZhbGlkYXRpb24gZm9yIHVzZXJuYW1lXG4gICAgY29uc3QgdXNlcm5hbWUgPSB0aGlzLmZpZWxkcy5maW5kKHIgPT4gci5uYW1lID09PSAndXNlcm5hbWUnKTtcbiAgICBpZiAodXNlcm5hbWUgJiYgIXVzZXJuYW1lLnZhbGlkYXRpb25zKSB7XG4gICAgICB1c2VybmFtZS52YWxpZGF0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgbWVzc2FnZTogXCJOYW1lIFJlcXVpcmVkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicGF0dGVyblwiLFxuICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5wYXR0ZXJuKFwiXlthLXpBLVpdKyRcIiksXG4gICAgICAgICAgbWVzc2FnZTogXCJBY2NlcHQgb25seSB0ZXh0XCJcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gZGVmYXVsdCB2YWxpZGF0aW9uIGZvciBwYXNzd29yZFxuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5maWVsZHMuZmluZChyID0+IHIubmFtZSA9PT0gJ3Bhc3N3b3JkJyk7XG4gICAgaWYgKHBhc3N3b3JkICYmICFwYXNzd29yZC52YWxpZGF0aW9ucykge1xuICAgICAgcGFzc3dvcmQudmFsaWRhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgUmVxdWlyZWRcIlxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgICAvLyBkZWZhdWx0IHZhbGlkYXRpb24gZm9yIGRhdGUgb2YgYmlydGhcbiAgICBjb25zdCBkb2IgPSB0aGlzLmZpZWxkcy5maW5kKHIgPT4gci5uYW1lID09PSAnZG9iJyk7XG4gICAgaWYgKGRvYiAmJiAhZG9iLnZhbGlkYXRpb25zKSB7XG4gICAgICBkb2IudmFsaWRhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiRGF0ZSBvZiBCaXJ0aCBSZXF1aXJlZFwiXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5jcmVhdGVDb250cm9sKCk7XG4gICAgXG4gICAgY29uc3QgdGhlV2l0Y2hOYW1lID0gdGhpcy5maWVsZHMuZmluZCggciA9PiByLm5hbWUgPT09ICdsZGFwJyk7ICAgXG4gICAgdGhpcy5sb2dpbkZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShyID0+IHtcbiAgICAgIGlmICh0aGVXaXRjaE5hbWUpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2ggPSB0aGlzLmxvZ2luRm9ybS5nZXQodGhlV2l0Y2hOYW1lLm5hbWUpLnZhbHVlO1xuICAgICAgfSBcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMubG9naW5Gb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnN1Ym1pdC5lbWl0KHRoaXMubG9naW5Gb3JtLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZHModGhpcy5sb2dpbkZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcbiAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSBcImJ1dHRvblwiKSByZXR1cm47XG4gICAgICBjb25zdCBjb250cm9sID0gdGhpcy5mYi5jb250cm9sKFxuICAgICAgICBmaWVsZC52YWx1ZSxcbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbnMoZmllbGQudmFsaWRhdGlvbnMgfHwgW10pXG4gICAgICApO1xuICAgICAgZ3JvdXAuYWRkQ29udHJvbChmaWVsZC5uYW1lLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cblxuICBiaW5kVmFsaWRhdGlvbnModmFsaWRhdGlvbnM6IGFueSk6IFZhbGlkYXRvckZuIHtcbiAgICBpZiAodmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdmFsaWRMaXN0ID0gZnVuY3Rpb24gKihhcnJheTogYW55W10pIHtcbiAgICAgICAgZm9yICh2YXIgaXRlbSBvZiBhcnJheSkge1xuICAgICAgICAgICAgeWllbGQgaXRlbS52YWxpZGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKEFycmF5LmZyb20odmFsaWRMaXN0KHZhbGlkYXRpb25zKSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChmaWVsZCk7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLypcbiAqIFRoaXMgbW9kdWxlIGltcG9ydHMgYW5kIHJlLWV4cG9ydHMgYWxsIEFuZ3VsYXIgTWF0ZXJpYWwgbW9kdWxlcyBmb3IgY29udmVuaWVuY2UsXG4gKiBzbyBvbmx5IDEgbW9kdWxlIGltcG9ydCBpcyBuZWVkZWQgaW4geW91ciBmZWF0dXJlIG1vZHVsZXMuXG4gKiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL2dldHRpbmctc3RhcnRlZCNzdGVwLTMtaW1wb3J0LXRoZS1jb21wb25lbnQtbW9kdWxlcy5cbiAqXG4gKiBUbyBvcHRpbWl6ZSB5b3VyIHByb2R1Y3Rpb24gYnVpbGRzLCB5b3Ugc2hvdWxkIG9ubHkgaW1wb3J0IHRoZSBjb21wb25lbnRzIHVzZWQgaW4geW91ciBhcHAuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSxcbiAgTWF0Q29tbW9uTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdExpbmVNb2R1bGUsXG4gIE1hdExpc3RNb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gIE1hdE9wdGlvbk1vZHVsZSxcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdFJpcHBsZU1vZHVsZSxcbiAgTWF0U2VsZWN0TW9kdWxlLFxuICBNYXRTaWRlbmF2TW9kdWxlLFxuICBNYXRTbGlkZXJNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0U29ydE1vZHVsZSxcbiAgTWF0U3RlcHBlck1vZHVsZSxcbiAgTWF0VGFibGVNb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsXG4gIE1hdFRvb2xiYXJNb2R1bGUsXG4gIE1hdFRvb2x0aXBNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1xuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpbmVNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWlucHV0XCIsXG4gIHRlbXBsYXRlOiBgXG48bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCIgW3R5cGVdPVwiZmllbGQuaW5wdXRUeXBlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgZmllbGQudmFsaWRhdGlvbnM7XCIgbmdQcm9qZWN0QXM9XCJtYXQtZXJyb3JcIj5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGZpZWxkLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj57e3ZhbGlkYXRpb24ubWVzc2FnZX19PC9tYXQtZXJyb3I+XG4gIDwvbmctY29udGFpbmVyPlxuPC9tYXQtZm9ybS1maWVsZD5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtYnV0dG9uXCIsXG4gIHRlbXBsYXRlOiBgXG48ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiBbbmdTdHlsZV09XCJ7J3RleHQtYWxpZ24nOiBmaWVsZC50ZXh0QWxpZ259XCI+XG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPnt7ZmllbGQubGFiZWx9fTwvYnV0dG9uPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1zZWxlY3RcIixcbiAgdGVtcGxhdGU6IGBcbjxtYXQtZm9ybS1maWVsZCBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG4gIDxtYXQtc2VsZWN0IFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLm9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtZGF0ZVwiLFxuICB0ZW1wbGF0ZTogYFxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZGVtby1mdWxsLXdpZHRoIG1hcmdpbi10b3BcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG48aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCI+XG48bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjxtYXQtaGludD48L21hdC1oaW50PlxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbiBvZiBmaWVsZC52YWxpZGF0aW9ucztcIiBuZ1Byb2plY3RBcz1cIm1hdC1lcnJvclwiPlxuPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChmaWVsZC5uYW1lKS5oYXNFcnJvcih2YWxpZGF0aW9uLm5hbWUpXCI+e3t2YWxpZGF0aW9uLm1lc3NhZ2V9fTwvbWF0LWVycm9yPlxuPC9uZy1jb250YWluZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXJhZGlvYnV0dG9uXCIsXG4gIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiZGVtby1mdWxsLXdpZHRoIG1hcmdpbi10b3BcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG48bGFiZWwgY2xhc3M9XCJyYWRpby1sYWJlbC1wYWRkaW5nXCI+e3tmaWVsZC5sYWJlbH19OjwvbGFiZWw+XG48bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPlxuPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQub3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb2J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1jaGVja2JveFwiLFxuICB0ZW1wbGF0ZTogYFxuPGRpdiBbZm9ybUdyb3VwXT1cImdyb3VwXCIgPlxuPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIj57e2ZpZWxkLmxhYmVsfX08L21hdC1jaGVja2JveD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRvZ2dsZS1zd2l0Y2gnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiIFtuZ1N0eWxlXT1cInsndGV4dC1hbGlnbic6IGZpZWxkLnRleHRBbGlnbn1cIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJsZGFwLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxkYXAtdGV4dFwiPiB7e2ZpZWxkLmxhYmVsfX0gPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsIGNsYXNzPVwiYnMtc3dpdGNoXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNsaWRlciByb3VuZFwiPjwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuPC9kaXY+YCxcbiAgc3R5bGVzOiBbYC5icy1zd2l0Y2h7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6NjBweDtoZWlnaHQ6MzRweH0uYnMtc3dpdGNoIGlucHV0e2Rpc3BsYXk6bm9uZX0uYnMtc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMTk2ZjN9LmJzLXN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXI6YmVmb3Jley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjZweCl9LmJzLXN3aXRjaCAuc2xpZGVye3Bvc2l0aW9uOmFic29sdXRlO2N1cnNvcjpwb2ludGVyO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JhY2tncm91bmQtY29sb3I6I2NjYzt0cmFuc2l0aW9uOi40c30uYnMtc3dpdGNoIC5zbGlkZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XCJcIjtoZWlnaHQ6MjZweDt3aWR0aDoyNnB4O2xlZnQ6NHB4O2JvdHRvbTo0cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmO3RyYW5zaXRpb246LjRzfS5icy1zd2l0Y2ggLnNsaWRlci5yb3VuZHtib3JkZXItcmFkaXVzOjM0cHh9LmJzLXN3aXRjaCAuc2xpZGVyLnJvdW5kOmJlZm9yZXtib3JkZXItcmFkaXVzOjUwJX1bdHlwZT1jaGVja2JveF06Y2hlY2tlZCxbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSxtYXQtY2hlY2tib3g6Y2hlY2tlZCxtYXQtY2hlY2tib3g6bm90KDpjaGVja2VkKXtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZX0ubGRhcC10ZXh0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjB9LmxkYXAtY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMHB4O2hlaWdodDozNHB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVN3aXRjaENvbXBvbmVudCB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vaW5wdXQvaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gXCIuLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuLi9kYXRlL2RhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSYWRpb2J1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4uL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9nZ2xlU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi4vdG9nZ2xlLXN3aXRjaC90b2dnbGUtc3dpdGNoLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudE1hcHBlciA9IHtcbiAgaW5wdXQ6IElucHV0Q29tcG9uZW50LFxuICBidXR0b246IEJ1dHRvbkNvbXBvbmVudCxcbiAgc2VsZWN0OiBTZWxlY3RDb21wb25lbnQsXG4gIGRhdGU6IERhdGVDb21wb25lbnQsXG4gIHJhZGlvYnV0dG9uOiBSYWRpb2J1dHRvbkNvbXBvbmVudCxcbiAgY2hlY2tib3g6IENoZWNrYm94Q29tcG9uZW50LFxuICBzd2l0Y2g6IFRvZ2dsZVN3aXRjaENvbXBvbmVudFxufTtcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbZHluYW1pY0ZpZWxkXVwiXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29tcG9uZW50UmVmOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxuICApIHt9XG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgY29tcG9uZW50TWFwcGVyW3RoaXMuZmllbGQudHlwZV1cbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpZWxkID0gdGhpcy5maWVsZDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcblxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IER5bmFtaWNGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vY29uZmlndXJhYmxlL2R5bmFtaWMtZmllbGQvZHluYW1pYy1maWVsZC5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpZ3VyYWJsZS9pbnB1dC9pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpZ3VyYWJsZS9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlndXJhYmxlL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlndXJhYmxlL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJhZGlvYnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlndXJhYmxlL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUb2dnbGVTd2l0Y2hDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvdG9nZ2xlLXN3aXRjaC90b2dnbGUtc3dpdGNoLmNvbXBvbmVudFwiO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgRHluYW1pY0ZpZWxkRGlyZWN0aXZlLFxuICAgIElucHV0Q29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgRGF0ZUNvbXBvbmVudCxcbiAgICBSYWRpb2J1dHRvbkNvbXBvbmVudCxcbiAgICBDaGVja2JveENvbXBvbmVudCxcbiAgICBUb2dnbGVTd2l0Y2hDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFJhZGlvYnV0dG9uQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIFRvZ2dsZVN3aXRjaENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbTG9naW5Db21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0lBOENFLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO3NCQVBGLEVBQUU7c0JBSUcsSUFBSSxZQUFZLEVBQU87S0FLNUQ7Ozs7O0lBQ0QsV0FBVyxDQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQjs7OztJQUNELFFBQVE7UUFDTixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7O1lBRW5DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkM7O1FBR0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQy9CLEtBQUssQ0FBQyxXQUFXLEdBQUc7Z0JBQ2xCO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixTQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVE7b0JBQzlCLE9BQU8sRUFBRSxnQkFBZ0I7aUJBQzFCO2dCQUNEO29CQUNFLElBQUksRUFB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