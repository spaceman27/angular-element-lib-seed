/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { DateComponent } from "../date/date.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { ToggleSwitchComponent } from '../toggle-switch/toggle-switch.component';
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
        { type: Directive, args: [{
                    selector: "[dynamicField]"
                },] },
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicFieldDirective.propDecorators = {
        field: [{ type: Input }],
        group: [{ type: Input }]
    };
    return DynamicFieldDirective;
}());
export { DynamicFieldDirective };
if (false) {
    /** @type {?} */
    DynamicFieldDirective.prototype.field;
    /** @type {?} */
    DynamicFieldDirective.prototype.group;
    /** @type {?} */
    DynamicFieldDirective.prototype.componentRef;
    /** @type {?} */
    DynamicFieldDirective.prototype.resolver;
    /** @type {?} */
    DynamicFieldDirective.prototype.container;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0YS9sb2dpbi8iLCJzb3VyY2VzIjpbImxpYi9jb25maWd1cmFibGUvZHluYW1pYy1maWVsZC9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsS0FBSyxFQUVMLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOztBQUVqRixJQUFNLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsY0FBYztJQUNyQixNQUFNLEVBQUUsZUFBZTtJQUN2QixNQUFNLEVBQUUsZUFBZTtJQUN2QixJQUFJLEVBQUUsYUFBYTtJQUNuQixXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFFBQVEsRUFBRSxpQkFBaUI7SUFDM0IsTUFBTSxFQUFFLHFCQUFxQjtDQUM5QixDQUFDOztJQVFBLCtCQUNVLFVBQ0E7UUFEQSxhQUFRLEdBQVIsUUFBUTtRQUNSLGNBQVMsR0FBVCxTQUFTO0tBQ2Y7Ozs7SUFDSix3Q0FBUTs7O0lBQVI7O1FBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDbkQsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQy9DOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQTVCQyx3QkFBd0I7Z0JBS3hCLGdCQUFnQjs7O3dCQXlCZixLQUFLO3dCQUNMLEtBQUs7O2dDQWhDUjs7U0E4QmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uL2lucHV0L2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmFkaW9idXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi4vcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gXCIuLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvZ2dsZVN3aXRjaENvbXBvbmVudCB9IGZyb20gJy4uL3RvZ2dsZS1zd2l0Y2gvdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRNYXBwZXIgPSB7XG4gIGlucHV0OiBJbnB1dENvbXBvbmVudCxcbiAgYnV0dG9uOiBCdXR0b25Db21wb25lbnQsXG4gIHNlbGVjdDogU2VsZWN0Q29tcG9uZW50LFxuICBkYXRlOiBEYXRlQ29tcG9uZW50LFxuICByYWRpb2J1dHRvbjogUmFkaW9idXR0b25Db21wb25lbnQsXG4gIGNoZWNrYm94OiBDaGVja2JveENvbXBvbmVudCxcbiAgc3dpdGNoOiBUb2dnbGVTd2l0Y2hDb21wb25lbnRcbn07XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW2R5bmFtaWNGaWVsZF1cIlxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWVsZDogRmllbGRDb25maWc7XG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbXBvbmVudFJlZjogYW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIGNvbXBvbmVudE1hcHBlclt0aGlzLmZpZWxkLnR5cGVdXG4gICAgKTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5maWVsZCA9IHRoaXMuZmllbGQ7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICB9XG59XG4iXX0=