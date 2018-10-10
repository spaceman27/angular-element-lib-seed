/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
export class RadiobuttonComponent {
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
if (false) {
    /** @type {?} */
    RadiobuttonComponent.prototype.field;
    /** @type {?} */
    RadiobuttonComponent.prototype.group;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbG9naW4vIiwic291cmNlcyI6WyJsaWIvY29uZmlndXJhYmxlL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQWVsRCxNQUFNO0lBR0osaUJBQWdCOzs7O0lBQ2hCLFFBQVEsTUFBSzs7O1lBaEJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Q0FPWDtnQkFDQyxNQUFNLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtcmFkaW9idXR0b25cIixcbiAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGggbWFyZ2luLXRvcFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbjxsYWJlbCBjbGFzcz1cInJhZGlvLWxhYmVsLXBhZGRpbmdcIj57e2ZpZWxkLmxhYmVsfX06PC9sYWJlbD5cbjxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCI+XG48bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5vcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW1cIj57e2l0ZW19fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbjwvbWF0LXJhZGlvLWdyb3VwPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvYnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==