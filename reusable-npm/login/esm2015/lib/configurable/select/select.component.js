/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
export class SelectComponent {
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
if (false) {
    /** @type {?} */
    SelectComponent.prototype.field;
    /** @type {?} */
    SelectComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzaXRhL2xvZ2luLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZ3VyYWJsZS9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQWNsRCxNQUFNO0lBR0osaUJBQWdCOzs7O0lBQ2hCLFFBQVEsTUFBSzs7O1lBZmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7OztDQU1YO2dCQUNDLE1BQU0sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1zZWxlY3RcIixcbiAgdGVtcGxhdGU6IGBcbjxtYXQtZm9ybS1maWVsZCBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG4gIDxtYXQtc2VsZWN0IFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLm9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19