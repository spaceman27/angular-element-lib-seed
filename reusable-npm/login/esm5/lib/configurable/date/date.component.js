/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
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
        { type: Component, args: [{
                    selector: "app-date",
                    template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<input matInput [matDatepicker]=\"picker\" [formControlName]=\"field.name\" [placeholder]=\"field.label\">\n<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n<mat-hint></mat-hint>\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    DateComponent.ctorParameters = function () { return []; };
    return DateComponent;
}());
export { DateComponent };
if (false) {
    /** @type {?} */
    DateComponent.prototype.field;
    /** @type {?} */
    DateComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0YS9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb25maWd1cmFibGUvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUFxQmhEO0tBQWdCOzs7O0lBQ2hCLGdDQUFROzs7SUFBUixlQUFhOztnQkFuQmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsa2pCQVVYO29CQUNDLE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O3dCQWpCRDs7U0FrQmEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWRhdGVcIixcbiAgdGVtcGxhdGU6IGBcbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZnVsbC13aWR0aCBtYXJnaW4tdG9wXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiPlxuPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbjxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48bWF0LWhpbnQ+PC9tYXQtaGludD5cbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgZmllbGQudmFsaWRhdGlvbnM7XCIgbmdQcm9qZWN0QXM9XCJtYXQtZXJyb3JcIj5cbjxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoZmllbGQubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPnt7dmFsaWRhdGlvbi5tZXNzYWdlfX08L21hdC1lcnJvcj5cbjwvbmctY29udGFpbmVyPlxuPC9tYXQtZm9ybS1maWVsZD5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpZWxkOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=