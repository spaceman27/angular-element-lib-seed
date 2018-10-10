/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
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
        { type: Component, args: [{
                    selector: "app-input",
                    template: "\n<mat-form-field style=\"display:block\" [formGroup]=\"group\">\n  <input matInput [formControlName]=\"field.name\" [placeholder]=\"field.label\" [type]=\"field.inputType\">\n  <ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n    <mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n  </ng-container>\n</mat-form-field>\n",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    return InputComponent;
}());
export { InputComponent };
if (false) {
    /** @type {?} */
    InputComponent.prototype.field;
    /** @type {?} */
    InputComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbG9naW4vIiwic291cmNlcyI6WyJsaWIvY29uZmlndXJhYmxlL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7SUFrQmhEO0tBQWdCOzs7O0lBQ2hCLGlDQUFROzs7SUFBUixlQUFhOztnQkFoQmQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsaWFBT1g7b0JBQ0MsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7eUJBZEQ7O1NBZWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXBwLWlucHV0XCIsXG4gIHRlbXBsYXRlOiBgXG48bWF0LWZvcm0tZmllbGQgc3R5bGU9XCJkaXNwbGF5OmJsb2NrXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCIgW3R5cGVdPVwiZmllbGQuaW5wdXRUeXBlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgZmllbGQudmFsaWRhdGlvbnM7XCIgbmdQcm9qZWN0QXM9XCJtYXQtZXJyb3JcIj5cbiAgICA8bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGZpZWxkLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj57e3ZhbGlkYXRpb24ubWVzc2FnZX19PC9tYXQtZXJyb3I+XG4gIDwvbmctY29udGFpbmVyPlxuPC9tYXQtZm9ybS1maWVsZD5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19