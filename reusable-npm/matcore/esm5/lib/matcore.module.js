/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MatcoreComponent } from './matcore.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';
var MatcoreModule = /** @class */ (function () {
    function MatcoreModule() {
    }
    MatcoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MaterialModule,
                    ],
                    declarations: [MatcoreComponent, NavbarComponent, NavbarItemComponent, ToolbarComponent],
                    exports: [MatcoreComponent, NavbarComponent, NavbarItemComponent, ToolbarComponent]
                },] },
    ];
    return MatcoreModule;
}());
export { MatcoreModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0YS9tYXRjb3JlLyIsInNvdXJjZXMiOlsibGliL21hdGNvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Z0JBRXJFLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGNBQWM7cUJBQ2Y7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO29CQUN4RixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7aUJBRXBGOzt3QkFuQkQ7O1NBb0JhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Y29yZUNvbXBvbmVudCB9IGZyb20gJy4vbWF0Y29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF2YmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci1pdGVtL25hdmJhci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01hdGNvcmVDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgTmF2YmFySXRlbUNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNYXRjb3JlQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIE5hdmJhckl0ZW1Db21wb25lbnQsIFRvb2xiYXJDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgTWF0Y29yZU1vZHVsZSB7fVxuIl19