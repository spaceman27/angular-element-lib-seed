/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
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
        { type: Component, args: [{
                    selector: "app-radiobutton",
                    template: "\n<div class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<label class=\"radio-label-padding\">{{field.label}}:</label>\n<mat-radio-group [formControlName]=\"field.name\">\n<mat-radio-button *ngFor=\"let item of field.options\" [value]=\"item\">{{item}}</mat-radio-button>\n</mat-radio-group>\n</div>\n",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    RadiobuttonComponent.ctorParameters = function () { return []; };
    return RadiobuttonComponent;
}());
export { RadiobuttonComponent };
if (false) {
    /** @type {?} */
    RadiobuttonComponent.prototype.field;
    /** @type {?} */
    RadiobuttonComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbG9naW4vIiwic291cmNlcyI6WyJsaWIvY29uZmlndXJhYmxlL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUFrQmhEO0tBQWdCOzs7O0lBQ2hCLHVDQUFROzs7SUFBUixlQUFhOztnQkFoQmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwwVEFPWDtvQkFDQyxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OzsrQkFkRDs7U0FlYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImFwcC1yYWRpb2J1dHRvblwiLFxuICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImRlbW8tZnVsbC13aWR0aCBtYXJnaW4tdG9wXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuPGxhYmVsIGNsYXNzPVwicmFkaW8tbGFiZWwtcGFkZGluZ1wiPnt7ZmllbGQubGFiZWx9fTo8L2xhYmVsPlxuPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIj5cbjxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLm9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtcmFkaW8tYnV0dG9uPlxuPC9tYXQtcmFkaW8tZ3JvdXA+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9idXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19