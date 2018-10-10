/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export class LoginComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFtQ2pGLE1BQU07Ozs7SUFVSixZQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtzQkFQRixFQUFFO3NCQUlHLElBQUksWUFBWSxFQUFPO0tBSzVEOzs7OztJQUNELFdBQVcsQ0FBQyxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDaEI7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFOztZQUVuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZDOztRQUdELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQztRQUN4RCxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDL0IsS0FBSyxDQUFDLFdBQVcsR0FBRztnQkFDbEI7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUTtvQkFDOUIsT0FBTyxFQUFFLGdCQUFnQjtpQkFDMUI7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQzNCLHlDQUF5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LENBQUMsMk1BQTJNLENBQUM7YUFDdE47Ozs7WUFsQ21CLFdBQVc7OztxQkFzQzVCLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuL2ZpZWxkLmludGVyZmFjZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpdGEtbG9naW4nLFxuICB0ZW1wbGF0ZTogYDxkaXYgW25nU3R5bGVdPSd7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiBsb2dpbkJnSW1hZ2V9JyBmeEZpbGwgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMS41cmVtXCIgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiPlxuICA8ZGl2PlxuICAgIDxoMSBmeExheW91dEFsaWduPVwiY2VudGVyXCI+IHt7dGl0bGV9fSA8L2gxPlxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiBmeExheW91dEFsaWduPVwiY2VudGVyIGNlbnRlclwiIGZ4TGF5b3V0R2FwPVwiMnJlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxhbmd1YWdlLXNlbGVjdG9yXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltsb2dpbi1sYW5nXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWNvbnRhaW5lclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRBbGlnbj1cImNlbnRlclwiPiAgICBcbiAgICA8bWF0LWNhcmQgZnhGbGV4PVwiOTAlXCIgZnhGbGV4LnNtPVwiNjYlXCIgZnhGbGV4Lm1kPVwiNTAlXCIgZnhGbGV4Lmd0LW1kPVwiMzMlXCIgY2xhc3M9XCJsb2dpbi1ib3hcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxvZ2luLWVycm9yXCIgKm5nSWY9XCJsb2dpbkVycm9yXCI+IHt7bG9naW5FcnJvcn19IDwvbGFiZWw+XG4gICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZHM7XCIgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3dpdGNoICYmIGZpZWxkLm5hbWUgIT09ICd1c2VybmFtZScgJiYgZmllbGQubmFtZSAhPT0gJ3Bhc3N3b3JkJ1wiIGR5bmFtaWNGaWVsZCBbZmllbGRdPVwiZmllbGRcIiBbZ3JvdXBdPVwibG9naW5Gb3JtXCI+XG5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc3dpdGNoXCIgZHluYW1pY0ZpZWxkIFtmaWVsZF09XCJmaWVsZFwiIFtncm91cF09XCJsb2dpbkZvcm1cIj5cblxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L21hdC1jYXJkPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTpmbGV4O2ZsZXg6MTtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9LmlubGluZS1sb2FkZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9LnZlcnNpb257bWFyZ2luOjB9LmxvZ2luLWNvbnRhaW5lciwubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJX0ubG9naW4tZXJyb3J7Y29sb3I6cmVkO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIFxuICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZmllbGRzOiBGaWVsZENvbmZpZ1tdID0gW107XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ2luRXJyb3I6IHN0cmluZztcbiAgQElucHV0KCkgbG9naW5CZ0ltYWdlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgc3dpdGNoOiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xuICAgIFxuICB9XG4gIG5nT25DaGFuZ2VzKGM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGMpO1xuICB9XG4gIG5nT25Jbml0KCkgeyBcbiAgICBpZiAodHlwZW9mIHRoaXMuZmllbGRzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gUkVBQ1QgQ09NUEFUIEZJWDogdHJ5IHRvIGNvbnZlcnQgc3RyaW5nIGJhY2sgdG8gYXJyYXlcbiAgICAgIHRoaXMuZmllbGRzID0gSlNPTi5wYXJzZSh0aGlzLmZpZWxkcyk7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCB2YWxpZGF0aW9uIGZvciBlbWFpbFxuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5maWVsZHMuZmluZChyID0+IHIubmFtZSA9PT0gJ2VtYWlsJyk7XG4gICAgaWYgKGVtYWlsICYmICFlbWFpbC52YWxpZGF0aW9ucykge1xuICAgICAgZW1haWwudmFsaWRhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiRW1haWwgUmVxdWlyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwYXR0ZXJuXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnBhdHRlcm4oXG4gICAgICAgICAgICBcIl5bYS16MC05Ll8lKy1dK0BbYS16MC05Li1dKy5bYS16XXsyLDR9JFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgZW1haWxcIlxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgdmFsaWRhdGlvbiBmb3IgdXNlcm5hbWVcbiAgICBjb25zdCB1c2VybmFtZSA9IHRoaXMuZmllbGRzLmZpbmQociA9PiByLm5hbWUgPT09ICd1c2VybmFtZScpO1xuICAgIGlmICh1c2VybmFtZSAmJiAhdXNlcm5hbWUudmFsaWRhdGlvbnMpIHtcbiAgICAgIHVzZXJuYW1lLnZhbGlkYXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxuICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICBtZXNzYWdlOiBcIk5hbWUgUmVxdWlyZWRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJwYXR0ZXJuXCIsXG4gICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnBhdHRlcm4oXCJeW2EtekEtWl0rJFwiKSxcbiAgICAgICAgICBtZXNzYWdlOiBcIkFjY2VwdCBvbmx5IHRleHRcIlxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH1cbiAgICAvLyBkZWZhdWx0IHZhbGlkYXRpb24gZm9yIHBhc3N3b3JkXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmZpZWxkcy5maW5kKHIgPT4gci5uYW1lID09PSAncGFzc3dvcmQnKTtcbiAgICBpZiAocGFzc3dvcmQgJiYgIXBhc3N3b3JkLnZhbGlkYXRpb25zKSB7XG4gICAgICBwYXNzd29yZC52YWxpZGF0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBSZXF1aXJlZFwiXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICAgIC8vIGRlZmF1bHQgdmFsaWRhdGlvbiBmb3IgZGF0ZSBvZiBiaXJ0aFxuICAgIGNvbnN0IGRvYiA9IHRoaXMuZmllbGRzLmZpbmQociA9PiByLm5hbWUgPT09ICdkb2InKTtcbiAgICBpZiAoZG9iICYmICFkb2IudmFsaWRhdGlvbnMpIHtcbiAgICAgIGRvYi52YWxpZGF0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgbWVzc2FnZTogXCJEYXRlIG9mIEJpcnRoIFJlcXVpcmVkXCJcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9XG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmNyZWF0ZUNvbnRyb2woKTtcbiAgICBcbiAgICBjb25zdCB0aGVXaXRjaE5hbWUgPSB0aGlzLmZpZWxkcy5maW5kKCByID0+IHIubmFtZSA9PT0gJ2xkYXAnKTsgICBcbiAgICB0aGlzLmxvZ2luRm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHIgPT4ge1xuICAgICAgaWYgKHRoZVdpdGNoTmFtZSkge1xuICAgICAgICB0aGlzLnN3aXRjaCA9IHRoaXMubG9naW5Gb3JtLmdldCh0aGVXaXRjaE5hbWUubmFtZSkudmFsdWU7XG4gICAgICB9IFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5sb2dpbkZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQodGhpcy5sb2dpbkZvcm0udmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkcyh0aGlzLmxvZ2luRm9ybSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICBjb25zdCBncm91cCA9IHRoaXMuZmIuZ3JvdXAoe30pO1xuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiYnV0dG9uXCIpIHJldHVybjtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmZiLmNvbnRyb2woXG4gICAgICAgIGZpZWxkLnZhbHVlLFxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9ucyhmaWVsZC52YWxpZGF0aW9ucyB8fCBbXSlcbiAgICAgICk7XG4gICAgICBncm91cC5hZGRDb250cm9sKGZpZWxkLm5hbWUsIGNvbnRyb2wpO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIGJpbmRWYWxpZGF0aW9ucyh2YWxpZGF0aW9uczogYW55KTogVmFsaWRhdG9yRm4ge1xuICAgIGlmICh2YWxpZGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB2YWxpZExpc3QgPSBmdW5jdGlvbiAqKGFycmF5OiBhbnlbXSkge1xuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIGFycmF5KSB7XG4gICAgICAgICAgICB5aWVsZCBpdGVtLnZhbGlkYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UoQXJyYXkuZnJvbSh2YWxpZExpc3QodmFsaWRhdGlvbnMpKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFsaWRhdGVBbGxGb3JtRmllbGRzKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtR3JvdXAuZ2V0KGZpZWxkKTtcbiAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCh7IG9ubHlTZWxmOiB0cnVlIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=