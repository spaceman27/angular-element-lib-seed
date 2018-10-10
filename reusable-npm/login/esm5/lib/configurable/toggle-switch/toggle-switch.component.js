/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'app-toggle-switch',
                    template: "<div [formGroup]=\"group\" [ngStyle]=\"{'text-align': field.textAlign}\">\n    <label class=\"ldap-container\">\n        <span class=\"ldap-text\"> {{field.label}} </span>\n    </label>\n    <label class=\"bs-switch\">\n        <input type=\"checkbox\" [formControlName]=\"field.name\" />\n        <span class=\"slider round\"></span>\n    </label>\n</div>",
                    styles: [".bs-switch{position:relative;display:inline-block;width:60px;height:34px}.bs-switch input{display:none}.bs-switch input:checked+.slider{background-color:#2196f3}.bs-switch input:checked+.slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}.bs-switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.bs-switch .slider:before{position:absolute;content:\"\";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;transition:.4s}.bs-switch .slider.round{border-radius:34px}.bs-switch .slider.round:before{border-radius:50%}[type=checkbox]:checked,[type=checkbox]:not(:checked),mat-checkbox:checked,mat-checkbox:not(:checked){position:absolute;opacity:0;pointer-events:none}.ldap-text{position:absolute;right:0;bottom:0}.ldap-container{position:relative;display:inline-block;width:100px;height:34px}"]
                },] },
    ];
    /** @nocollapse */
    ToggleSwitchComponent.ctorParameters = function () { return []; };
    return ToggleSwitchComponent;
}());
export { ToggleSwitchComponent };
if (false) {
    /** @type {?} */
    ToggleSwitchComponent.prototype.field;
    /** @type {?} */
    ToggleSwitchComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0YS9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb25maWd1cmFibGUvdG9nZ2xlLXN3aXRjaC90b2dnbGUtc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBc0QsTUFBTSxlQUFlLENBQUM7O0lBcUI1RjtLQUFnQjs7OztJQUNoQix3Q0FBUTs7O0lBQVIsZUFBYTs7Z0JBakJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsc1dBUUw7b0JBQ0wsTUFBTSxFQUFFLENBQUMsMDNCQUF3M0IsQ0FBQztpQkFDbjRCOzs7O2dDQWpCRDs7U0FrQmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10b2dnbGUtc3dpdGNoJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiBbbmdTdHlsZV09XCJ7J3RleHQtYWxpZ24nOiBmaWVsZC50ZXh0QWxpZ259XCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGRhcC1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsZGFwLXRleHRcIj4ge3tmaWVsZC5sYWJlbH19IDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICAgIDxsYWJlbCBjbGFzcz1cImJzLXN3aXRjaFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+XG4gICAgPC9sYWJlbD5cbjwvZGl2PmAsXG4gIHN0eWxlczogW2AuYnMtc3dpdGNoe3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjYwcHg7aGVpZ2h0OjM0cHh9LmJzLXN3aXRjaCBpbnB1dHtkaXNwbGF5Om5vbmV9LmJzLXN3aXRjaCBpbnB1dDpjaGVja2VkKy5zbGlkZXJ7YmFja2dyb3VuZC1jb2xvcjojMjE5NmYzfS5icy1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDI2cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDI2cHgpfS5icy1zd2l0Y2ggLnNsaWRlcntwb3NpdGlvbjphYnNvbHV0ZTtjdXJzb3I6cG9pbnRlcjt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtiYWNrZ3JvdW5kLWNvbG9yOiNjY2M7dHJhbnNpdGlvbjouNHN9LmJzLXN3aXRjaCAuc2xpZGVyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlwiXCI7aGVpZ2h0OjI2cHg7d2lkdGg6MjZweDtsZWZ0OjRweDtib3R0b206NHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjt0cmFuc2l0aW9uOi40c30uYnMtc3dpdGNoIC5zbGlkZXIucm91bmR7Ym9yZGVyLXJhZGl1czozNHB4fS5icy1zd2l0Y2ggLnNsaWRlci5yb3VuZDpiZWZvcmV7Ym9yZGVyLXJhZGl1czo1MCV9W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsW3R5cGU9Y2hlY2tib3hdOm5vdCg6Y2hlY2tlZCksbWF0LWNoZWNrYm94OmNoZWNrZWQsbWF0LWNoZWNrYm94Om5vdCg6Y2hlY2tlZCl7cG9zaXRpb246YWJzb2x1dGU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LmxkYXAtdGV4dHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowfS5sZGFwLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxMDBweDtoZWlnaHQ6MzRweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVTd2l0Y2hDb21wb25lbnQge1xuICBmaWVsZDogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19