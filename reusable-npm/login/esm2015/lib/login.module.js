/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { DynamicFieldDirective } from './configurable/dynamic-field/dynamic-field.directive';
import { InputComponent } from "./configurable/input/input.component";
import { ButtonComponent } from "./configurable/button/button.component";
import { SelectComponent } from "./configurable/select/select.component";
import { DateComponent } from "./configurable/date/date.component";
import { RadiobuttonComponent } from "./configurable/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./configurable/checkbox/checkbox.component";
import { ToggleSwitchComponent } from "./configurable/toggle-switch/toggle-switch.component";
export class LoginModule {
}
LoginModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FlexLayoutModule,
                    MaterialModule
                ],
                declarations: [
                    LoginComponent,
                    DynamicFieldDirective,
                    InputComponent,
                    ButtonComponent,
                    SelectComponent,
                    DateComponent,
                    RadiobuttonComponent,
                    CheckboxComponent,
                    ToggleSwitchComponent
                ],
                entryComponents: [
                    InputComponent,
                    ButtonComponent,
                    SelectComponent,
                    DateComponent,
                    RadiobuttonComponent,
                    CheckboxComponent,
                    ToggleSwitchComponent
                ],
                exports: [LoginComponent]
            },] },
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbG9naW4vIiwic291cmNlcyI6WyJsaWIvbG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQStCN0YsTUFBTTs7O1lBOUJMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxxQkFBcUI7b0JBQ3JCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBRTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9jb25maWd1cmFibGUvZHluYW1pYy1maWVsZC9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlndXJhYmxlL2lucHV0L2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlndXJhYmxlL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmFkaW9idXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9jb25maWd1cmFibGUvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpZ3VyYWJsZS9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvZ2dsZVN3aXRjaENvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpZ3VyYWJsZS90b2dnbGUtc3dpdGNoL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50XCI7XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRmxleExheW91dE1vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBEeW5hbWljRmllbGREaXJlY3RpdmUsXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFJhZGlvYnV0dG9uQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIFRvZ2dsZVN3aXRjaENvbXBvbmVudFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBJbnB1dENvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIERhdGVDb21wb25lbnQsXG4gICAgUmFkaW9idXR0b25Db21wb25lbnQsXG4gICAgQ2hlY2tib3hDb21wb25lbnQsXG4gICAgVG9nZ2xlU3dpdGNoQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cbiJdfQ==