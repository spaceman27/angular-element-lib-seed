(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material'), require('@angular/common'), require('@angular/flex-layout')) :
    typeof define === 'function' && define.amd ? define('@sita/login', ['exports', '@angular/core', '@angular/forms', '@angular/material', '@angular/common', '@angular/flex-layout'], factory) :
    (factory((global.sita = global.sita || {}, global.sita.login = {}),global.ng.core,global.ng.forms,global.ng.material,global.ng.common,global.ng['flex-layout']));
}(this, (function (exports,core,forms,material,common,flexLayout) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(fb) {
            this.fb = fb;
            this.fields = [];
            this.submit = new core.EventEmitter();
        }
        /**
         * @param {?} c
         * @return {?}
         */
        LoginComponent.prototype.ngOnChanges = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                console.log(c);
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (typeof this.fields === 'string') {
                    // REACT COMPAT FIX: try to convert string back to array
                    this.fields = JSON.parse(this.fields);
                }
                /** @type {?} */
                var email = this.fields.find(function (r) { return r.name === 'email'; });
                if (email && !email.validations) {
                    email.validations = [
                        {
                            name: "required",
                            validator: forms.Validators.required,
                            message: "Email Required"
                        },
                        {
                            name: "pattern",
                            validator: forms.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
                            message: "Invalid email"
                        }
                    ];
                }
                /** @type {?} */
                var username = this.fields.find(function (r) { return r.name === 'username'; });
                if (username && !username.validations) {
                    username.validations = [
                        {
                            name: "required",
                            validator: forms.Validators.required,
                            message: "Name Required"
                        },
                        {
                            name: "pattern",
                            validator: forms.Validators.pattern("^[a-zA-Z]+$"),
                            message: "Accept only text"
                        }
                    ];
                }
                /** @type {?} */
                var password = this.fields.find(function (r) { return r.name === 'password'; });
                if (password && !password.validations) {
                    password.validations = [
                        {
                            name: "required",
                            validator: forms.Validators.required,
                            message: "Password Required"
                        }
                    ];
                }
                /** @type {?} */
                var dob = this.fields.find(function (r) { return r.name === 'dob'; });
                if (dob && !dob.validations) {
                    dob.validations = [
                        {
                            name: "required",
                            validator: forms.Validators.required,
                            message: "Date of Birth Required"
                        }
                    ];
                }
                this.loginForm = this.createControl();
                /** @type {?} */
                var theWitchName = this.fields.find(function (r) { return r.name === 'ldap'; });
                this.loginForm.valueChanges.subscribe(function (r) {
                    if (theWitchName) {
                        _this.switch = _this.loginForm.get(theWitchName.name).value;
                    }
                });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        LoginComponent.prototype.onSubmit = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (this.loginForm.valid) {
                    this.submit.emit(this.loginForm.value);
                }
                else {
                    this.validateAllFormFields(this.loginForm);
                }
            };
        /**
         * @return {?}
         */
        LoginComponent.prototype.createControl = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var group = this.fb.group({});
                this.fields.forEach(function (field) {
                    if (field.type === "button")
                        return;
                    /** @type {?} */
                    var control = _this.fb.control(field.value, _this.bindValidations(field.validations || []));
                    group.addControl(field.name, control);
                });
                return group;
            };
        /**
         * @param {?} validations
         * @return {?}
         */
        LoginComponent.prototype.bindValidations = /**
         * @param {?} validations
         * @return {?}
         */
            function (validations) {
                if (validations.length > 0) {
                    /** @type {?} */
                    var validList = function (array) {
                        var e_1, _a, array_1, array_1_1, item, e_1_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 5, 6, 7]);
                                    array_1 = __values(array), array_1_1 = array_1.next();
                                    _b.label = 1;
                                case 1:
                                    if (!!array_1_1.done)
                                        return [3 /*break*/, 4];
                                    item = array_1_1.value;
                                    return [4 /*yield*/, item.validator];
                                case 2:
                                    _b.sent();
                                    _b.label = 3;
                                case 3:
                                    array_1_1 = array_1.next();
                                    return [3 /*break*/, 1];
                                case 4: return [3 /*break*/, 7];
                                case 5:
                                    e_1_1 = _b.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 7];
                                case 6:
                                    try {
                                        if (array_1_1 && !array_1_1.done && (_a = array_1.return))
                                            _a.call(array_1);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
                                    return [7 /*endfinally*/];
                                case 7: return [2 /*return*/];
                            }
                        });
                    };
                    return forms.Validators.compose(Array.from(validList(validations)));
                }
                return null;
            };
        /**
         * @param {?} formGroup
         * @return {?}
         */
        LoginComponent.prototype.validateAllFormFields = /**
         * @param {?} formGroup
         * @return {?}
         */
            function (formGroup) {
                Object.keys(formGroup.controls).forEach(function (field) {
                    /** @type {?} */
                    var control = formGroup.get(field);
                    control.markAsTouched({ onlySelf: true });
                });
            };
        LoginComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'sita-login',
                        template: "<div [ngStyle]='{ \"background-image\": loginBgImage}' fxFill fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"1.5rem\" class=\"mat-typography\">\n  <div>\n    <h1 fxLayoutAlign=\"center\"> {{title}} </h1>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"2rem\">\n      <div class=\"language-selector\">\n        <ng-content select=\"[login-lang]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"login-container\" fxLayout=\"row\" fxLayoutAlign=\"center\">    \n    <mat-card fxFlex=\"90%\" fxFlex.sm=\"66%\" fxFlex.md=\"50%\" fxFlex.gt-md=\"33%\" class=\"login-box\">\n      <label class=\"login-error\" *ngIf=\"loginError\"> {{loginError}} </label>\n      <form (ngSubmit)=\"onSubmit($event)\" [formGroup]=\"loginForm\" novalidate>\n          <ng-container *ngFor=\"let field of fields;\" >\n              <ng-container *ngIf=\"switch && field.name !== 'username' && field.name !== 'password'\" dynamicField [field]=\"field\" [group]=\"loginForm\">\n\n              </ng-container>\n              <ng-container *ngIf=\"!switch\" dynamicField [field]=\"field\" [group]=\"loginForm\">\n\n              </ng-container>\n          </ng-container>\n      </form>\n    </mat-card>\n  </div>\n</div>\n\n",
                        styles: [":host{display:flex;flex:1;background-color:#f5f5f5}.inline-loader{display:inline-block}.version{margin:0}.login-container,.mat-form-field{width:100%}.login-error{color:red;text-align:center;width:100%}"]
                    },] },
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder }
            ];
        };
        LoginComponent.propDecorators = {
            fields: [{ type: core.Input }],
            title: [{ type: core.Input }],
            loginError: [{ type: core.Input }],
            loginBgImage: [{ type: core.Input }],
            submit: [{ type: core.Output }]
        };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [
                            material.MatAutocompleteModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatCommonModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatFormFieldModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatLineModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatOptionModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatPseudoCheckboxModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSlideToggleModule,
                            material.MatSliderModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatStepperModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule
                        ]
                    },] },
        ];
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var InputComponent = /** @class */ (function () {
        function InputComponent() {
        }
        /**
         * @return {?}
         */
        InputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        InputComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-input",
                        template: "\n<mat-form-field style=\"display:block\" [formGroup]=\"group\">\n  <input matInput [formControlName]=\"field.name\" [placeholder]=\"field.label\" [type]=\"field.inputType\">\n  <ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n    <mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n  </ng-container>\n</mat-form-field>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () { return []; };
        return InputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-button",
                        template: "\n<div [formGroup]=\"group\" [ngStyle]=\"{'text-align': field.textAlign}\">\n  <button type=\"submit\" mat-raised-button color=\"primary\">{{field.label}}</button>\n</div>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var SelectComponent = /** @class */ (function () {
        function SelectComponent() {
        }
        /**
         * @return {?}
         */
        SelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        SelectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-select",
                        template: "\n<mat-form-field style=\"display:block\" [formGroup]=\"group\">\n  <mat-select [placeholder]=\"field.label\" [formControlName]=\"field.name\">\n    <mat-option *ngFor=\"let item of field.options\" [value]=\"item\">{{item}}</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        return SelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var DateComponent = /** @class */ (function () {
        function DateComponent() {
        }
        /**
         * @return {?}
         */
        DateComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        DateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-date",
                        template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<input matInput [matDatepicker]=\"picker\" [formControlName]=\"field.name\" [placeholder]=\"field.label\">\n<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n<mat-hint></mat-hint>\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        DateComponent.ctorParameters = function () { return []; };
        return DateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var RadiobuttonComponent = /** @class */ (function () {
        function RadiobuttonComponent() {
        }
        /**
         * @return {?}
         */
        RadiobuttonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        RadiobuttonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-radiobutton",
                        template: "\n<div class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<label class=\"radio-label-padding\">{{field.label}}:</label>\n<mat-radio-group [formControlName]=\"field.name\">\n<mat-radio-button *ngFor=\"let item of field.options\" [value]=\"item\">{{item}}</mat-radio-button>\n</mat-radio-group>\n</div>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        RadiobuttonComponent.ctorParameters = function () { return []; };
        return RadiobuttonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
        }
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "app-checkbox",
                        template: "\n<div [formGroup]=\"group\" >\n<mat-checkbox [formControlName]=\"field.name\">{{field.label}}</mat-checkbox>\n</div>\n",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToggleSwitchComponent = /** @class */ (function () {
        function ToggleSwitchComponent() {
        }
        /**
         * @return {?}
         */
        ToggleSwitchComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ToggleSwitchComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-toggle-switch',
                        template: "<div [formGroup]=\"group\" [ngStyle]=\"{'text-align': field.textAlign}\">\n    <label class=\"ldap-container\">\n        <span class=\"ldap-text\"> {{field.label}} </span>\n    </label>\n    <label class=\"bs-switch\">\n        <input type=\"checkbox\" [formControlName]=\"field.name\" />\n        <span class=\"slider round\"></span>\n    </label>\n</div>",
                        styles: [".bs-switch{position:relative;display:inline-block;width:60px;height:34px}.bs-switch input{display:none}.bs-switch input:checked+.slider{background-color:#2196f3}.bs-switch input:checked+.slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}.bs-switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.bs-switch .slider:before{position:absolute;content:\"\";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.bs-switch .slider.round{border-radius:34px}.bs-switch .slider.round:before{border-radius:50%}[type=checkbox]:checked,[type=checkbox]:not(:checked),mat-checkbox:checked,mat-checkbox:not(:checked){position:absolute;opacity:0;pointer-events:none}.ldap-text{position:absolute;right:0;bottom:0}.ldap-container{position:relative;display:inline-block;width:100px;height:34px}"]
                    },] },
        ];
        /** @nocollapse */
        ToggleSwitchComponent.ctorParameters = function () { return []; };
        return ToggleSwitchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var componentMapper = {
        input: InputComponent,
        button: ButtonComponent,
        select: SelectComponent,
        date: DateComponent,
        radiobutton: RadiobuttonComponent,
        checkbox: CheckboxComponent,
        switch: ToggleSwitchComponent
    };
    var DynamicFieldDirective = /** @class */ (function () {
        function DynamicFieldDirective(resolver, container) {
            this.resolver = resolver;
            this.container = container;
        }
        /**
         * @return {?}
         */
        DynamicFieldDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
                this.componentRef = this.container.createComponent(factory);
                this.componentRef.instance.field = this.field;
                this.componentRef.instance.group = this.group;
            };
        DynamicFieldDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[dynamicField]"
                    },] },
        ];
        /** @nocollapse */
        DynamicFieldDirective.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        DynamicFieldDirective.propDecorators = {
            field: [{ type: core.Input }],
            group: [{ type: core.Input }]
        };
        return DynamicFieldDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var LoginModule = /** @class */ (function () {
        function LoginModule() {
        }
        LoginModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.ReactiveFormsModule,
                            flexLayout.FlexLayoutModule,
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
        return LoginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.LoginComponent = LoginComponent;
    exports.LoginModule = LoginModule;
    exports.ɵd = ButtonComponent;
    exports.ɵh = CheckboxComponent;
    exports.ɵf = DateComponent;
    exports.ɵb = DynamicFieldDirective;
    exports.ɵc = InputComponent;
    exports.ɵg = RadiobuttonComponent;
    exports.ɵe = SelectComponent;
    exports.ɵi = ToggleSwitchComponent;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0YS1sb2dpbi51bWQuanMubWFwIiwic291cmNlcyI6W251bGwsIm5nOi8vQHNpdGEvbG9naW4vbGliL2xvZ2luLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL2NvbmZpZ3VyYWJsZS9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL2NvbmZpZ3VyYWJsZS9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIiwibmc6Ly9Ac2l0YS9sb2dpbi9saWIvY29uZmlndXJhYmxlL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL2xvZ2luL2xpYi9jb25maWd1cmFibGUvZHluYW1pYy1maWVsZC9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZS50cyIsIm5nOi8vQHNpdGEvbG9naW4vbGliL2xvZ2luLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuL2ZpZWxkLmludGVyZmFjZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpdGEtbG9naW4nLFxuICB0ZW1wbGF0ZTogYDxkaXYgW25nU3R5bGVdPSd7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiBsb2dpbkJnSW1hZ2V9JyBmeEZpbGwgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMS41cmVtXCIgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8ZGl2PlxuICAgIDxoMSBmeExheW91dEFsaWduPVwiY2VudGVyXCI+IHt7dGl0bGV9fSA8L2gxPlxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMnJlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxhbmd1YWdlLXNlbGVjdG9yXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltsb2dpbi1sYW5nXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWNvbnRhaW5lclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPiAgICBcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiOTAlXCIgZnhGbGV4LnNtPVwiNjYlXCIgZnhGbGV4Lm1kPVwiNTAlXCIgZnhGbGV4Lmd0LW1kPVwiMzMlXCIgY2xhc3M9XCJsb2dpbi1ib3hcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxvZ2luLWVycm9yXCIgKm5nSWY9XCJsb2dpbkVycm9yXCI+IHt7bG9naW5FcnJvcn19IDwvbGFiZWw+XG4gICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHM7XCIgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3dpdGNoICYmIGZpZWxkLm5hbWUgIT09ICd1c2VybmFtZScgJiYgZmllbGQubmFtZSAhPT0gJ3Bhc3N3b3JkJ1wiIGR5bmFtaWNGaWVsZCBbZmllbGRdPVwiZmllbGRcIiBbZ3JvdXBdPVwibG9naW5Gb3JtXCI+XG5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3dpdGNoXCIgZHluYW1pY0ZpZWxkIFtmaWVsZF09XCJmaWVsZFwiIFtncm91cF09XCJsb2dpbkZvcm1cIj5cblxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L21hdC1jYXJkPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpmbGV4O2ZsZXg6MTtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LmlubGluZS1sb2FkZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnZlcnNpb257bWFyZ2luOjB9LmxvZ2luLWNvbnRhaW5lciwubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX0ubG9naW4tZXJyb3J7Y29sb3I6cmVkO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIFxuICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZmllbGRzOiBGaWVsZENvbmZpZ1tdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ2luRXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgbG9naW5CZ0ltYWdlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgc3dpdGNoOiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIFxuICB9XG4gIG5nT25DaGFuZ2VzKGM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGMpO1xuICB9XG4gIG5nT25Jbml0KCkgeyBcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gUkVBQ1QgQ09NUEFUIEZJWDogdHJ5IHRvIGNvbnZlcnQgc3RyaW5nIGJhY2sgdG8gYXJyYXlcbiAgICAgIHRoaXMuZmllbGRzID0gSlNPTi5wYXJzZSh0aGlzLmZpZWxkcyk7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCB2YWxpZGF0aW9uIGZvciBlbWFpbFxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5maWVsZHMuZmluZChyID0+IHIubmFtZSA9PT0gJ2VtYWlsJyk7XG4gICAgaWYgKGVtYWlsICYmICFlbWFpbC52YWxpZGF0aW9ucykge1xuICAgICAgZW1haWwudmFsaWRhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiRW1haWwgUmVxdWlyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwYXR0ZXJuXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnBhdHRlcm4oXG4gICAgICAgICAgICBcIl5bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dKy5bYS16XXsyLDR9JFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgZW1haWxcIlxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgdmFsaWRhdGlvbiBmb3IgdXNlcm5hbWVcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMuZmllbGRzLmZpbmQociA9PiByLm5hbWUgPT09ICd1c2VybmFtZScpO1xuICAgIGlmICh1c2VybmFtZSAmJiAhdXNlcm5hbWUudmFsaWRhdGlvbnMpIHtcbiAgICAgIHVzZXJuYW1lLnZhbGlkYXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICBtZXNzYWdlOiBcIk5hbWUgUmVxdWlyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwYXR0ZXJuXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnBhdHRlcm4oXCJeW2EtekEtWl0rJFwiKSxcbiAgICAgICAgICBtZXNzYWdlOiBcIkFjY2VwdCBvbmx5IHRleHRcIlxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgICAvLyBkZWZhdWx0IHZhbGlkYXRpb24gZm9yIHBhc3N3b3JkXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmZpZWxkcy5maW5kKHIgPT4gci5uYW1lID09PSAncGFzc3dvcmQnKTtcbiAgICBpZiAocGFzc3dvcmQgJiYgIXBhc3N3b3JkLnZhbGlkYXRpb25zKSB7XG4gICAgICBwYXNzd29yZC52YWxpZGF0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBSZXF1aXJlZFwiXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICAgIC8vIGRlZmF1bHQgdmFsaWRhdGlvbiBmb3IgZGF0ZSBvZiBiaXJ0aFxuICAgIGNvbnN0IGRvYiA9IHRoaXMuZmllbGRzLmZpbmQociA9PiByLm5hbWUgPT09ICdkb2InKTtcbiAgICBpZiAoZG9iICYmICFkb2IudmFsaWRhdGlvbnMpIHtcbiAgICAgIGRvYi52YWxpZGF0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgbWVzc2FnZTogXCJEYXRlIG9mIEJpcnRoIFJlcXVpcmVkXCJcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmNyZWF0ZUNvbnRyb2woKTtcbiAgICBcbiAgICBjb25zdCB0aGVXaXRjaE5hbWUgPSB0aGlzLmZpZWxkcy5maW5kKCByID0+IHIubmFtZSA9PT0gJ2xkYXAnKTsgICBcbiAgICB0aGlzLmxvZ2luRm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgaWYgKHRoZVdpdGNoTmFtZSkge1xuICAgICAgICB0aGlzLnN3aXRjaCA9IHRoaXMubG9naW5Gb3JtLmdldCh0aGVXaXRjaE5hbWUubmFtZSkudmFsdWU7XG4gICAgICB9IFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQodGhpcy5sb2dpbkZvcm0udmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkcyh0aGlzLmxvZ2luRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuZmIuZ3JvdXAoe30pO1xuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiYnV0dG9uXCIpIHJldHVybjtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2woXG4gICAgICAgIGZpZWxkLnZhbHVlLFxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9ucyhmaWVsZC52YWxpZGF0aW9ucyB8fCBbXSlcbiAgICAgICk7XG4gICAgICBncm91cC5hZGRDb250cm9sKGZpZWxkLm5hbWUsIGNvbnRyb2wpO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIGJpbmRWYWxpZGF0aW9ucyh2YWxpZGF0aW9uczogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGlmICh2YWxpZGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB2YWxpZExpc3QgPSBmdW5jdGlvbiAqKGFycmF5OiBhbnlbXSkge1xuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGFycmF5KSB7XG4gICAgICAgICAgICB5aWVsZCBpdGVtLnZhbGlkYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoQXJyYXkuZnJvbSh2YWxpZExpc3QodmFsaWRhdGlvbnMpKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRzKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkKTtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBtb2R1bGUgaW1wb3J0cyBhbmQgcmUtZXhwb3J0cyBhbGwgQW5ndWxhciBNYXRlcmlhbCBtb2R1bGVzIGZvciBjb252ZW5pZW5jZSxcbiAqIHNvIG9ubHkgMSBtb2R1bGUgaW1wb3J0IGlzIG5lZWRlZCBpbiB5b3VyIGZlYXR1cmUgbW9kdWxlcy5cbiAqIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvZ2V0dGluZy1zdGFydGVkI3N0ZXAtMy1pbXBvcnQtdGhlLWNvbXBvbmVudC1tb2R1bGVzLlxuICpcbiAqIFRvIG9wdGltaXplIHlvdXIgcHJvZHVjdGlvbiBidWlsZHMsIHlvdSBzaG91bGQgb25seSBpbXBvcnQgdGhlIGNvbXBvbmVudHMgdXNlZCBpbiB5b3VyIGFwcC5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICBNYXRCdXR0b25Nb2R1bGUsXG4gIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgTWF0Q2FyZE1vZHVsZSxcbiAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gIE1hdENoaXBzTW9kdWxlLFxuICBNYXRDb21tb25Nb2R1bGUsXG4gIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gIE1hdERpYWxvZ01vZHVsZSxcbiAgTWF0RGl2aWRlck1vZHVsZSxcbiAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0TGluZU1vZHVsZSxcbiAgTWF0TGlzdE1vZHVsZSxcbiAgTWF0TWVudU1vZHVsZSxcbiAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgTWF0T3B0aW9uTW9kdWxlLFxuICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlLFxuICBNYXRSYWRpb01vZHVsZSxcbiAgTWF0UmlwcGxlTW9kdWxlLFxuICBNYXRTZWxlY3RNb2R1bGUsXG4gIE1hdFNpZGVuYXZNb2R1bGUsXG4gIE1hdFNsaWRlck1vZHVsZSxcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBNYXRTb3J0TW9kdWxlLFxuICBNYXRTdGVwcGVyTW9kdWxlLFxuICBNYXRUYWJsZU1vZHVsZSxcbiAgTWF0VGFic01vZHVsZSxcbiAgTWF0VG9vbGJhck1vZHVsZSxcbiAgTWF0VG9vbHRpcE1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRDb21tb25Nb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0TGluZU1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRPcHRpb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtaW5wdXRcIixcbiAgdGVtcGxhdGU6IGBcbjxtYXQtZm9ybS1maWVsZCBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIiBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIiBbdHlwZV09XCJmaWVsZC5pbnB1dFR5cGVcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbiBvZiBmaWVsZC52YWxpZGF0aW9ucztcIiBuZ1Byb2plY3RBcz1cIm1hdC1lcnJvclwiPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoZmllbGQubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPnt7dmFsaWRhdGlvbi5tZXNzYWdlfX08L21hdC1lcnJvcj5cbiAgPC9uZy1jb250YWluZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1idXR0b25cIixcbiAgdGVtcGxhdGU6IGBcbjxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiIFtuZ1N0eWxlXT1cInsndGV4dC1hbGlnbic6IGZpZWxkLnRleHRBbGlnbn1cIj5cbiAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+e3tmaWVsZC5sYWJlbH19PC9idXR0b24+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLXNlbGVjdFwiLFxuICB0ZW1wbGF0ZTogYFxuPG1hdC1mb3JtLWZpZWxkIHN0eWxlPVwiZGlzcGxheTpibG9ja1wiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgPG1hdC1zZWxlY3QgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQub3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtXCI+e3tpdGVtfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1kYXRlXCIsXG4gIHRlbXBsYXRlOiBgXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGggbWFyZ2luLXRvcFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbjxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIiBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIj5cbjxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG48bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuPG1hdC1oaW50PjwvbWF0LWhpbnQ+XG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uIG9mIGZpZWxkLnZhbGlkYXRpb25zO1wiIG5nUHJvamVjdEFzPVwibWF0LWVycm9yXCI+XG48bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGZpZWxkLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj57e3ZhbGlkYXRpb24ubWVzc2FnZX19PC9tYXQtZXJyb3I+XG48L25nLWNvbnRhaW5lcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtcmFkaW9idXR0b25cIixcbiAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGggbWFyZ2luLXRvcFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbjxsYWJlbCBjbGFzcz1cInJhZGlvLWxhYmVsLXBhZGRpbmdcIj57e2ZpZWxkLmxhYmVsfX06PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCI+XG48bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5vcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvYnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWNoZWNrYm94XCIsXG4gIHRlbXBsYXRlOiBgXG48ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiA+XG48bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPnt7ZmllbGQubGFiZWx9fTwvbWF0LWNoZWNrYm94PlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9nZ2xlLXN3aXRjaCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBbZm9ybUdyb3VwXT1cImdyb3VwXCIgW25nU3R5bGVdPVwieyd0ZXh0LWFsaWduJzogZmllbGQudGV4dEFsaWdufVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxkYXAtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGRhcC10ZXh0XCI+IHt7ZmllbGQubGFiZWx9fSA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWwgY2xhc3M9XCJicy1zd2l0Y2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgIDwvbGFiZWw+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmJzLXN3aXRjaHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo2MHB4O2hlaWdodDozNHB4fS5icy1zd2l0Y2ggaW5wdXR7ZGlzcGxheTpub25lfS5icy1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVye2JhY2tncm91bmQtY29sb3I6IzIxOTZmM30uYnMtc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyNnB4KX0uYnMtc3dpdGNoIC5zbGlkZXJ7cG9zaXRpb246YWJzb2x1dGU7Y3Vyc29yOnBvaW50ZXI7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjojY2NjO3RyYW5zaXRpb246LjRzfS5icy1zd2l0Y2ggLnNsaWRlcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcIlwiO2hlaWdodDoyNnB4O3dpZHRoOjI2cHg7bGVmdDo0cHg7Ym90dG9tOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7dHJhbnNpdGlvbjouNHN9LmJzLXN3aXRjaCAuc2xpZGVyLnJvdW5ke2JvcmRlci1yYWRpdXM6MzRweH0uYnMtc3dpdGNoIC5zbGlkZXIucm91bmQ6YmVmb3Jle2JvcmRlci1yYWRpdXM6NTAlfVt0eXBlPWNoZWNrYm94XTpjaGVja2VkLFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpLG1hdC1jaGVja2JveDpjaGVja2VkLG1hdC1jaGVja2JveDpub3QoOmNoZWNrZWQpe3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5sZGFwLXRleHR7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MH0ubGRhcC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwcHg7aGVpZ2h0OjM0cHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoQ29tcG9uZW50IHtcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi9pbnB1dC9pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJhZGlvYnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tIFwiLi4vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUb2dnbGVTd2l0Y2hDb21wb25lbnQgfSBmcm9tICcuLi90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50TWFwcGVyID0ge1xuICBpbnB1dDogSW5wdXRDb21wb25lbnQsXG4gIGJ1dHRvbjogQnV0dG9uQ29tcG9uZW50LFxuICBzZWxlY3Q6IFNlbGVjdENvbXBvbmVudCxcbiAgZGF0ZTogRGF0ZUNvbXBvbmVudCxcbiAgcmFkaW9idXR0b246IFJhZGlvYnV0dG9uQ29tcG9uZW50LFxuICBjaGVja2JveDogQ2hlY2tib3hDb21wb25lbnQsXG4gIHN3aXRjaDogVG9nZ2xlU3dpdGNoQ29tcG9uZW50XG59O1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcIltkeW5hbWljRmllbGRdXCJcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBASW5wdXQoKSBncm91cDogRm9ybUdyb3VwO1xuICBjb21wb25lbnRSZWY6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXG4gICkge31cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9jb25maWd1cmFibGUvZHluYW1pYy1maWVsZC9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlndXJhYmxlL2lucHV0L2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlndXJhYmxlL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmFkaW9idXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpZ3VyYWJsZS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvZ2dsZVN3aXRjaENvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpZ3VyYWJsZS90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50XCI7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBEeW5hbWljRmllbGREaXJlY3RpdmUsXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFJhZGlvYnV0dG9uQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIFRvZ2dsZVN3aXRjaENvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBJbnB1dENvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIERhdGVDb21wb25lbnQsXG4gICAgUmFkaW9idXR0b25Db21wb25lbnQsXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXG4gICAgVG9nZ2xlU3dpdGNoQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJWYWxpZGF0b3JzIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkNvbXBvbmVudCIsIkZvcm1CdWlsZGVyIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIk1hdEF1dG9jb21wbGV0ZU1vZHVsZSIsIk1hdEJ1dHRvbk1vZHVsZSIsIk1hdEJ1dHRvblRvZ2dsZU1vZHVsZSIsIk1hdENhcmRNb2R1bGUiLCJNYXRDaGVja2JveE1vZHVsZSIsIk1hdENoaXBzTW9kdWxlIiwiTWF0Q29tbW9uTW9kdWxlIiwiTWF0RGF0ZXBpY2tlck1vZHVsZSIsIk1hdERpYWxvZ01vZHVsZSIsIk1hdERpdmlkZXJNb2R1bGUiLCJNYXRFeHBhbnNpb25Nb2R1bGUiLCJNYXRGb3JtRmllbGRNb2R1bGUiLCJNYXRHcmlkTGlzdE1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRJbnB1dE1vZHVsZSIsIk1hdExpbmVNb2R1bGUiLCJNYXRMaXN0TW9kdWxlIiwiTWF0TWVudU1vZHVsZSIsIk1hdE5hdGl2ZURhdGVNb2R1bGUiLCJNYXRPcHRpb25Nb2R1bGUiLCJNYXRQYWdpbmF0b3JNb2R1bGUiLCJNYXRQcm9ncmVzc0Jhck1vZHVsZSIsIk1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSIsIk1hdFBzZXVkb0NoZWNrYm94TW9kdWxlIiwiTWF0UmFkaW9Nb2R1bGUiLCJNYXRSaXBwbGVNb2R1bGUiLCJNYXRTZWxlY3RNb2R1bGUiLCJNYXRTaWRlbmF2TW9kdWxlIiwiTWF0U2xpZGVUb2dnbGVNb2R1bGUiLCJNYXRTbGlkZXJNb2R1bGUiLCJNYXRTbmFja0Jhck1vZHVsZSIsIk1hdFNvcnRNb2R1bGUiLCJNYXRTdGVwcGVyTW9kdWxlIiwiTWF0VGFibGVNb2R1bGUiLCJNYXRUYWJzTW9kdWxlIiwiTWF0VG9vbGJhck1vZHVsZSIsIk1hdFRvb2x0aXBNb2R1bGUiLCJEaXJlY3RpdmUiLCJDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tbW9uTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkZsZXhMYXlvdXRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHlCQTRENEIsT0FBTyxFQUFFLElBQUk7UUFDckMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFhLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pILE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFhLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6SixjQUFjLENBQUMsSUFBSSxPQUFPLFVBQVUsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDbEUsY0FBYyxFQUFFO1lBQ1osSUFBSSxDQUFDO2dCQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUM7Z0JBQUUsSUFBSTtvQkFDVixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUk7d0JBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzdKLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ1QsS0FBSyxDQUFDLENBQUM7d0JBQUMsS0FBSyxDQUFDOzRCQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsTUFBTTt3QkFDOUIsS0FBSyxDQUFDOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7d0JBQ3hELEtBQUssQ0FBQzs0QkFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3dCQUNqRCxLQUFLLENBQUM7NEJBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7NEJBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFBQyxTQUFTO3dCQUNqRDs0QkFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FBQyxTQUFTOzZCQUFFOzRCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FBQyxNQUFNOzZCQUFFOzRCQUN0RixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQ0FBQyxNQUFNOzZCQUFFOzRCQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQ0FBQyxNQUFNOzZCQUFFOzRCQUNuRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFBQyxTQUFTO3FCQUM5QjtvQkFD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