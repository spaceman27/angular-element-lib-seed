/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class ToggleSwitchComponent {
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
if (false) {
    /** @type {?} */
    ToggleSwitchComponent.prototype.field;
    /** @type {?} */
    ToggleSwitchComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0YS9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb25maWd1cmFibGUvdG9nZ2xlLXN3aXRjaC90b2dnbGUtc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBc0QsTUFBTSxlQUFlLENBQUM7QUFrQjlGLE1BQU07SUFHSixpQkFBZ0I7Ozs7SUFDaEIsUUFBUSxNQUFLOzs7WUFqQmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7T0FRTDtnQkFDTCxNQUFNLEVBQUUsQ0FBQyx3M0JBQXczQixDQUFDO2FBQ240QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9nZ2xlLXN3aXRjaCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBbZm9ybUdyb3VwXT1cImdyb3VwXCIgW25nU3R5bGVdPVwieyd0ZXh0LWFsaWduJzogZmllbGQudGV4dEFsaWdufVwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxkYXAtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGRhcC10ZXh0XCI+IHt7ZmllbGQubGFiZWx9fSA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWwgY2xhc3M9XCJicy1zd2l0Y2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgIDwvbGFiZWw+XG48L2Rpdj5gLFxuICBzdHlsZXM6IFtgLmJzLXN3aXRjaHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDo2MHB4O2hlaWdodDozNHB4fS5icy1zd2l0Y2ggaW5wdXR7ZGlzcGxheTpub25lfS5icy1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVye2JhY2tncm91bmQtY29sb3I6IzIxOTZmM30uYnMtc3dpdGNoIGlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyNnB4KX0uYnMtc3dpdGNoIC5zbGlkZXJ7cG9zaXRpb246YWJzb2x1dGU7Y3Vyc29yOnBvaW50ZXI7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjojY2NjO3RyYW5zaXRpb246LjRzfS5icy1zd2l0Y2ggLnNsaWRlcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcIlwiO2hlaWdodDoyNnB4O3dpZHRoOjI2cHg7bGVmdDo0cHg7Ym90dG9tOjRweDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7dHJhbnNpdGlvbjouNHN9LmJzLXN3aXRjaCAuc2xpZGVyLnJvdW5ke2JvcmRlci1yYWRpdXM6MzRweH0uYnMtc3dpdGNoIC5zbGlkZXIucm91bmQ6YmVmb3Jle2JvcmRlci1yYWRpdXM6NTAlfVt0eXBlPWNoZWNrYm94XTpjaGVja2VkLFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpLG1hdC1jaGVja2JveDpjaGVja2VkLG1hdC1jaGVja2JveDpub3QoOmNoZWNrZWQpe3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lfS5sZGFwLXRleHR7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MH0ubGRhcC1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwcHg7aGVpZ2h0OjM0cHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoQ29tcG9uZW50IHtcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==