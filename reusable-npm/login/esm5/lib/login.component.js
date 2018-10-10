/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.fields = [];
        this.submit = new EventEmitter();
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
        var username = this.fields.find(function (r) { return r.name === 'username'; });
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
        var password = this.fields.find(function (r) { return r.name === 'password'; });
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
        var dob = this.fields.find(function (r) { return r.name === 'dob'; });
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
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 5, 6, 7]);
                            array_1 = tslib_1.__values(array), array_1_1 = array_1.next();
                            _b.label = 1;
                        case 1:
                            if (!!array_1_1.done) return [3 /*break*/, 4];
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
                                if (array_1_1 && !array_1_1.done && (_a = array_1.return)) _a.call(array_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                            return [7 /*endfinally*/];
                        case 7: return [2 /*return*/];
                    }
                });
            };
            return Validators.compose(Array.from(validList(validations)));
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
        { type: Component, args: [{
                    selector: 'sita-login',
                    template: "<div [ngStyle]='{ \"background-image\": loginBgImage}' fxFill fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"1.5rem\" class=\"mat-typography\">\n  <div>\n    <h1 fxLayoutAlign=\"center\"> {{title}} </h1>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"2rem\">\n      <div class=\"language-selector\">\n        <ng-content select=\"[login-lang]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"login-container\" fxLayout=\"row\" fxLayoutAlign=\"center\">    \n    <mat-card fxFlex=\"90%\" fxFlex.sm=\"66%\" fxFlex.md=\"50%\" fxFlex.gt-md=\"33%\" class=\"login-box\">\n      <label class=\"login-error\" *ngIf=\"loginError\"> {{loginError}} </label>\n      <form (ngSubmit)=\"onSubmit($event)\" [formGroup]=\"loginForm\" novalidate>\n          <ng-container *ngFor=\"let field of fields;\" >\n              <ng-container *ngIf=\"switch && field.name !== 'username' && field.name !== 'password'\" dynamicField [field]=\"field\" [group]=\"loginForm\">\n\n              </ng-container>\n              <ng-container *ngIf=\"!switch\" dynamicField [field]=\"field\" [group]=\"loginForm\">\n\n              </ng-container>\n          </ng-container>\n      </form>\n    </mat-card>\n  </div>\n</div>\n\n",
                    styles: [":host{display:flex;flex:1;background-color:#f5f5f5}.inline-loader{display:inline-block}.version{margin:0}.login-container,.mat-form-field{width:100%}.login-error{color:red;text-align:center;width:100%}"]
                },] },
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    LoginComponent.propDecorators = {
        fields: [{ type: Input }],
        title: [{ type: Input }],
        loginError: [{ type: Input }],
        loginBgImage: [{ type: Input }],
        submit: [{ type: Output }]
    };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.loginForm;
    /** @type {?} */
    LoginComponent.prototype.fields;
    /** @type {?} */
    LoginComponent.prototype.title;
    /** @type {?} */
    LoginComponent.prototype.loginError;
    /** @type {?} */
    LoginComponent.prototype.loginBgImage;
    /** @type {?} */
    LoginComponent.prototype.submit;
    /** @type {?} */
    LoginComponent.prototype.switch;
    /** @type {?} */
    LoginComponent.prototype.fb;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQWEsV0FBVyxFQUFFLFVBQVUsRUFBZSxNQUFNLGdCQUFnQixDQUFDOztJQTZDL0Usd0JBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO3NCQVBGLEVBQUU7c0JBSUcsSUFBSSxZQUFZLEVBQU87S0FLNUQ7Ozs7O0lBQ0Qsb0NBQVc7Ozs7SUFBWCxVQUFZLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoQjs7OztJQUNELGlDQUFROzs7SUFBUjtRQUFBLGlCQXVFQztRQXRFQyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7O1lBRW5DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkM7O1FBR0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3hELElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUMvQixLQUFLLENBQUMsV0FBVyxHQUFHO2dCQUNsQjtvQkFDRSxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsU0FBUyxFQUFFLFVBQVUsQ0FBQyxRQUFRO29CQUM5QixPQUFPLEVBQUUsZ0JBQWdCO2lCQUMxQjtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixTQUFT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LElBQUksRUFBRSxDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ0o7O2dCQWhLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw0dUNBMEJYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDJNQUEyTSxDQUFDO2lCQUN0Tjs7OztnQkFsQ21CLFdBQVc7Ozt5QkFzQzVCLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBQ0wsTUFBTTs7eUJBM0NUOztTQW9DYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4vZmllbGQuaW50ZXJmYWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2l0YS1sb2dpbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBbbmdTdHlsZV09J3sgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IGxvZ2luQmdJbWFnZX0nIGZ4RmlsbCBmeExheW91dD1cImNvbHVtblwiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIxLjVyZW1cIiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5XCI+XG4gIDxkaXY+XG4gICAgPGgxIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIj4ge3t0aXRsZX19IDwvaDE+XG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXIgY2VudGVyXCIgZnhMYXlvdXRHYXA9XCIycmVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGFuZ3VhZ2Utc2VsZWN0b3JcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2xvZ2luLWxhbmddXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibG9naW4tY29udGFpbmVyXCIgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyXCI+ICAgIFxuICAgIDxtYXQtY2FyZCBmeEZsZXg9XCI5MCVcIiBmeEZsZXguc209XCI2NiVcIiBmeEZsZXgubWQ9XCI1MCVcIiBmeEZsZXguZ3QtbWQ9XCIzMyVcIiBjbGFzcz1cImxvZ2luLWJveFwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwibG9naW4tZXJyb3JcIiAqbmdJZj1cImxvZ2luRXJyb3JcIj4ge3tsb2dpbkVycm9yfX0gPC9sYWJlbD5cbiAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgkZXZlbnQpXCIgW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1cIiBub3ZhbGlkYXRlPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGZpZWxkcztcIiA+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzd2l0Y2ggJiYgZmllbGQubmFtZSAhPT0gJ3VzZXJuYW1lJyAmJiBmaWVsZC5uYW1lICE9PSAncGFzc3dvcmQnXCIgZHluYW1pY0ZpZWxkIFtmaWVsZF09XCJmaWVsZFwiIFtncm91cF09XCJsb2dpbkZvcm1cIj5cblxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzd2l0Y2hcIiBkeW5hbWljRmllbGQgW2ZpZWxkXT1cImZpZWxkXCIgW2dyb3VwXT1cImxvZ2luRm9ybVwiPlxuXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9mb3JtPlxuICAgIDwvbWF0LWNhcmQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbmAsXG4gIHN0eWxlczogW2A6aG9zdHtkaXNwbGF5OmZsZXg7ZmxleDoxO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0uaW5saW5lLWxvYWRlcntkaXNwbGF5OmlubGluZS1ibG9ja30udmVyc2lvbnttYXJnaW46MH0ubG9naW4tY29udGFpbmVyLC5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlfS5sb2dpbi1lcnJvcntjb2xvcjpyZWQ7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgXG4gIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmaWVsZHM6IEZpZWxkQ29uZmlnW10gPSBbXTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbG9naW5FcnJvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dpbkJnSW1hZ2U6IHN0cmluZztcbiAgQE91dHB1dCgpIHN1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzd2l0Y2g6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgXG4gIH1cbiAgbmdPbkNoYW5nZXMoYzogYW55KSB7XG4gICAgY29uc29sZS5sb2coYyk7XG4gIH1cbiAgbmdPbkluaXQoKSB7IFxuICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBSRUFDVCBDT01QQVQgRklYOiB0cnkgdG8gY29udmVydCBzdHJpbmcgYmFjayB0byBhcnJheVxuICAgICAgdGhpcy5maWVsZHMgPSBKU09OLnBhcnNlKHRoaXMuZmllbGRzKTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IHZhbGlkYXRpb24gZm9yIGVtYWlsXG4gICAgY29uc3QgZW1haWwgPSB0aGlzLmZpZWxkcy5maW5kKHIgPT4gci5uYW1lID09PSAnZW1haWwnKTtcbiAgICBpZiAoZW1haWwgJiYgIWVtYWlsLnZhbGlkYXRpb25zKSB7XG4gICAgICBlbWFpbC52YWxpZGF0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgbWVzc2FnZTogXCJFbWFpbCBSZXF1aXJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInBhdHRlcm5cIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucGF0dGVybihcbiAgICAgICAgICAgIFwiXlthLXowLTkuXyUrLV0rQFthLXowLTkuLV0rLlthLXpdezIsNH0kXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBlbWFpbFwiXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCB2YWxpZGF0aW9uIGZvciB1c2VybmFtZVxuICAgIGNvbnN0IHVzZXJuYW1lID0gdGhpcy5maWVsZHMuZmluZChyID0+IHIubmFtZSA9PT0gJ3VzZXJuYW1lJyk7XG4gICAgaWYgKHVzZXJuYW1lICYmICF1c2VybmFtZS52YWxpZGF0aW9ucykge1xuICAgICAgdXNlcm5hbWUudmFsaWRhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiTmFtZSBSZXF1aXJlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInBhdHRlcm5cIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucGF0dGVybihcIl5bYS16QS1aXSskXCIpLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiQWNjZXB0IG9ubHkgdGV4dFwiXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICAgIC8vIGRlZmF1bHQgdmFsaWRhdGlvbiBmb3IgcGFzc3dvcmRcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZmllbGRzLmZpbmQociA9PiByLm5hbWUgPT09ICdwYXNzd29yZCcpO1xuICAgIGlmIChwYXNzd29yZCAmJiAhcGFzc3dvcmQudmFsaWRhdGlvbnMpIHtcbiAgICAgIHBhc3N3b3JkLnZhbGlkYXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIFJlcXVpcmVkXCJcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG4gICAgLy8gZGVmYXVsdCB2YWxpZGF0aW9uIGZvciBkYXRlIG9mIGJpcnRoXG4gICAgY29uc3QgZG9iID0gdGhpcy5maWVsZHMuZmluZChyID0+IHIubmFtZSA9PT0gJ2RvYicpO1xuICAgIGlmIChkb2IgJiYgIWRvYi52YWxpZGF0aW9ucykge1xuICAgICAgZG9iLnZhbGlkYXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICBtZXNzYWdlOiBcIkRhdGUgb2YgQmlydGggUmVxdWlyZWRcIlxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuY3JlYXRlQ29udHJvbCgpO1xuICAgIFxuICAgIGNvbnN0IHRoZVdpdGNoTmFtZSA9IHRoaXMuZmllbGRzLmZpbmQoIHIgPT4gci5uYW1lID09PSAnbGRhcCcpOyAgIFxuICAgIHRoaXMubG9naW5Gb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUociA9PiB7XG4gICAgICBpZiAodGhlV2l0Y2hOYW1lKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoID0gdGhpcy5sb2dpbkZvcm0uZ2V0KHRoZVdpdGNoTmFtZS5uYW1lKS52YWx1ZTtcbiAgICAgIH0gXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdChldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5zdWJtaXQuZW1pdCh0aGlzLmxvZ2luRm9ybS52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRzKHRoaXMubG9naW5Gb3JtKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG4gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJidXR0b25cIikgcmV0dXJuO1xuICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuZmIuY29udHJvbChcbiAgICAgICAgZmllbGQudmFsdWUsXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb25zKGZpZWxkLnZhbGlkYXRpb25zIHx8IFtdKVxuICAgICAgKTtcbiAgICAgIGdyb3VwLmFkZENvbnRyb2woZmllbGQubmFtZSwgY29udHJvbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgYmluZFZhbGlkYXRpb25zKHZhbGlkYXRpb25zOiBhbnkpOiBWYWxpZGF0b3JGbiB7XG4gICAgaWYgKHZhbGlkYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHZhbGlkTGlzdCA9IGZ1bmN0aW9uICooYXJyYXk6IGFueVtdKSB7XG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIHlpZWxkIGl0ZW0udmFsaWRhdG9yO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFZhbGlkYXRvcnMuY29tcG9zZShBcnJheS5mcm9tKHZhbGlkTGlzdCh2YWxpZGF0aW9ucykpKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YWxpZGF0ZUFsbEZvcm1GaWVsZHMoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmllbGQpO1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==