import { Injectable, NgModule, Component, Input, Output, EventEmitter, defineInjectable } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatCommonModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatLineModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatPseudoCheckboxModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MatcoreService {
    constructor() { }
}
MatcoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
MatcoreService.ctorParameters = () => [];
/** @nocollapse */ MatcoreService.ngInjectableDef = defineInjectable({ factory: function MatcoreService_Factory() { return new MatcoreService(); }, token: MatcoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MatcoreComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MatcoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'sitamat-matcore',
                template: `
    <p>
      matcore works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
MatcoreComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavbarComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sitamat-navbar',
                template: `<div class="mynav">
  <mat-nav-list>   
    <ng-content></ng-content>
  </mat-nav-list>
</div>
`,
                styles: [`.mynav{width:8em;background-color:#005485;height:100%}`]
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MatAutocompleteModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatChipsModule,
                    MatCommonModule,
                    MatDatepickerModule,
                    MatDialogModule,
                    MatDividerModule,
                    MatExpansionModule,
                    MatFormFieldModule,
                    MatGridListModule,
                    MatIconModule,
                    MatInputModule,
                    MatLineModule,
                    MatListModule,
                    MatMenuModule,
                    MatNativeDateModule,
                    MatOptionModule,
                    MatPaginatorModule,
                    MatProgressBarModule,
                    MatProgressSpinnerModule,
                    MatPseudoCheckboxModule,
                    MatRadioModule,
                    MatRippleModule,
                    MatSelectModule,
                    MatSidenavModule,
                    MatSlideToggleModule,
                    MatSliderModule,
                    MatSnackBarModule,
                    MatSortModule,
                    MatStepperModule,
                    MatTableModule,
                    MatTabsModule,
                    MatToolbarModule,
                    MatTooltipModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NavbarItemComponent {
    constructor() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.active && changes.active.currentValue) {
            if (typeof this.active === 'string') {
                // REACT COMPAT FIX: try to convert string to boolean
                this.active = this.active === 'true';
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavbarItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'sitamat-navbar-item',
                template: `<mat-list-item [ngClass]="{ 'active': active}">   
  <div class="nav-item">
      <div class="link-item">
        <span>
          <ng-content select="[icon-html]"></ng-content>  
        </span>
        <span class="nav-text">
          <ng-content select="[nav-text]"></ng-content>
        </span>
      </div>
  </div>
  <mat-divider></mat-divider>
</mat-list-item>`,
                styles: [`.nav-item{width:100%;text-align:center}.nav-item mat-icon{font-size:2.5em;width:40px;height:40px}.nav-item a{font-weight:700}.link-item{display:flex;flex-direction:column}.nav-text{font-size:14px}.mat-list-item{height:80px!important;text-decoration:none}.mat-list-item:hover{background:rgba(0,0,0,.05)}.active ::ng-deep .mat-list-item-content{background:#fff!important;margin-left:8px;border-top-left-radius:5px;border-bottom-left-radius:5px}`]
            },] },
];
/** @nocollapse */
NavbarItemComponent.ctorParameters = () => [];
NavbarItemComponent.propDecorators = {
    active: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ToolbarComponent {
    constructor() {
        this.changeLang = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'sitamat-toolbar',
                template: `<mat-toolbar class="mat-elevation-z6 navbar" color="primary">
  <div fxHide.gt-sm fxLayoutAlign="start center">
    <button class="menu-button" mat-icon-button>
      <mat-icon>menu</mat-icon>
    </button>
    <ng-content select="[toolbar-title]"></ng-content> 
  </div>
  <span fxFlex>
    <ng-content select="[toolbar-content]"></ng-content>
  </span>
  <span fxFlex>
      <ng-content select="[toolbar-lang]"></ng-content>
  </span>
</mat-toolbar>
`,
                styles: [`.navbar{position:fixed;top:0;left:0;right:0;z-index:1}.brand{color:#fff;text-decoration:none;padding-right:1rem}.menu-button{margin-right:1rem}.mat-toolbar.mat-primary{background:#2196f3;color:#fff}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}`]
            },] },
];
/** @nocollapse */
ToolbarComponent.ctorParameters = () => [];
ToolbarComponent.propDecorators = {
    languages: [{ type: Input }],
    changeLang: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MatcoreModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MatcoreService, MatcoreComponent, MatcoreModule, NavbarComponent, NavbarItemComponent, ToolbarComponent, MaterialModule as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0YS1tYXRjb3JlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9Ac2l0YS9tYXRjb3JlL2xpYi9tYXRjb3JlLnNlcnZpY2UudHMiLCJuZzovL0BzaXRhL21hdGNvcmUvbGliL21hdGNvcmUuY29tcG9uZW50LnRzIiwibmc6Ly9Ac2l0YS9tYXRjb3JlL2xpYi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbWF0Y29yZS9saWIvbWF0ZXJpYWwubW9kdWxlLnRzIiwibmc6Ly9Ac2l0YS9tYXRjb3JlL2xpYi9uYXZiYXIvbmF2YmFyLWl0ZW0vbmF2YmFyLWl0ZW0uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2l0YS9tYXRjb3JlL2xpYi9uYXZiYXIvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbWF0Y29yZS9saWIvbWF0Y29yZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYXRjb3JlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpdGFtYXQtbWF0Y29yZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBtYXRjb3JlIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRjb3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaXRhbWF0LW5hdmJhcicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm15bmF2XCI+XG4gIDxtYXQtbmF2LWxpc3Q+ICAgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L21hdC1uYXYtbGlzdD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYC5teW5hdnt3aWR0aDo4ZW07YmFja2dyb3VuZC1jb2xvcjojMDA1NDg1O2hlaWdodDoxMDAlfWBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiLypcbiAqIFRoaXMgbW9kdWxlIGltcG9ydHMgYW5kIHJlLWV4cG9ydHMgYWxsIEFuZ3VsYXIgTWF0ZXJpYWwgbW9kdWxlcyBmb3IgY29udmVuaWVuY2UsXG4gKiBzbyBvbmx5IDEgbW9kdWxlIGltcG9ydCBpcyBuZWVkZWQgaW4geW91ciBmZWF0dXJlIG1vZHVsZXMuXG4gKiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL2dldHRpbmctc3RhcnRlZCNzdGVwLTMtaW1wb3J0LXRoZS1jb21wb25lbnQtbW9kdWxlcy5cbiAqXG4gKiBUbyBvcHRpbWl6ZSB5b3VyIHByb2R1Y3Rpb24gYnVpbGRzLCB5b3Ugc2hvdWxkIG9ubHkgaW1wb3J0IHRoZSBjb21wb25lbnRzIHVzZWQgaW4geW91ciBhcHAuXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gIE1hdENhcmRNb2R1bGUsXG4gIE1hdENoZWNrYm94TW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSxcbiAgTWF0Q29tbW9uTW9kdWxlLFxuICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdERpdmlkZXJNb2R1bGUsXG4gIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgTWF0SWNvbk1vZHVsZSxcbiAgTWF0SW5wdXRNb2R1bGUsXG4gIE1hdExpbmVNb2R1bGUsXG4gIE1hdExpc3RNb2R1bGUsXG4gIE1hdE1lbnVNb2R1bGUsXG4gIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gIE1hdE9wdGlvbk1vZHVsZSxcbiAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICBNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSxcbiAgTWF0UmFkaW9Nb2R1bGUsXG4gIE1hdFJpcHBsZU1vZHVsZSxcbiAgTWF0U2VsZWN0TW9kdWxlLFxuICBNYXRTaWRlbmF2TW9kdWxlLFxuICBNYXRTbGlkZXJNb2R1bGUsXG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgTWF0U29ydE1vZHVsZSxcbiAgTWF0U3RlcHBlck1vZHVsZSxcbiAgTWF0VGFibGVNb2R1bGUsXG4gIE1hdFRhYnNNb2R1bGUsXG4gIE1hdFRvb2xiYXJNb2R1bGUsXG4gIE1hdFRvb2x0aXBNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW1xuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0Q29tbW9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdExpbmVNb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0T3B0aW9uTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VGFic01vZHVsZSxcbiAgICBNYXRUb29sYmFyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaXRhbWF0LW5hdmJhci1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bWF0LWxpc3QtaXRlbSBbbmdDbGFzc109XCJ7ICdhY3RpdmUnOiBhY3RpdmV9XCI+ICAgXG4gIDxkaXYgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaWNvbi1odG1sXVwiPjwvbmctY29udGVudD4gIFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LXRleHRcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbmF2LXRleHRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPC9tYXQtbGlzdC1pdGVtPmAsXG4gIHN0eWxlczogW2AubmF2LWl0ZW17d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0ubmF2LWl0ZW0gbWF0LWljb257Zm9udC1zaXplOjIuNWVtO3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9Lm5hdi1pdGVtIGF7Zm9udC13ZWlnaHQ6NzAwfS5saW5rLWl0ZW17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubmF2LXRleHR7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWl0ZW17aGVpZ2h0OjgwcHghaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbjpub25lfS5tYXQtbGlzdC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDUpfS5hY3RpdmUgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnR7YmFja2dyb3VuZDojZmZmIWltcG9ydGFudDttYXJnaW4tbGVmdDo4cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlICYmIGNoYW5nZXMuYWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFjdGl2ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gUkVBQ1QgQ09NUEFUIEZJWDogdHJ5IHRvIGNvbnZlcnQgc3RyaW5nIHRvIGJvb2xlYW5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSA9PT0gJ3RydWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpdGFtYXQtdG9vbGJhcicsXG4gIHRlbXBsYXRlOiBgPG1hdC10b29sYmFyIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16NiBuYXZiYXJcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgPGRpdiBmeEhpZGUuZ3Qtc20gZnhMYXlvdXRBbGlnbj1cInN0YXJ0IGNlbnRlclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJtZW51LWJ1dHRvblwiIG1hdC1pY29uLWJ1dHRvbj5cbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbGJhci10aXRsZV1cIj48L25nLWNvbnRlbnQ+IFxuICA8L2Rpdj5cbiAgPHNwYW4gZnhGbGV4PlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0b29sYmFyLWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG4gIDxzcGFuIGZ4RmxleD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0b29sYmFyLWxhbmddXCI+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG48L21hdC10b29sYmFyPlxuYCxcbiAgc3R5bGVzOiBbYC5uYXZiYXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoxfS5icmFuZHtjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lO3BhZGRpbmctcmlnaHQ6MXJlbX0ubWVudS1idXR0b257bWFyZ2luLXJpZ2h0OjFyZW19Lm1hdC10b29sYmFyLm1hdC1wcmltYXJ5e2JhY2tncm91bmQ6IzIxOTZmMztjb2xvcjojZmZmfS5tYXQtYnV0dG9uLC5tYXQtaWNvbi1idXR0b24sLm1hdC1zdHJva2VkLWJ1dHRvbntjb2xvcjppbmhlcml0O2JhY2tncm91bmQ6MCAwfWBdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBsYW5ndWFnZXM6IGFueTtcbiAgQE91dHB1dCgpIGNoYW5nZUxhbmcgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFxuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Y29yZUNvbXBvbmVudCB9IGZyb20gJy4vbWF0Y29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF2YmFySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci1pdGVtL25hdmJhci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW01hdGNvcmVDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgTmF2YmFySXRlbUNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNYXRjb3JlQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIE5hdmJhckl0ZW1Db21wb25lbnQsIFRvb2xiYXJDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgTWF0Y29yZU1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBT0UsaUJBQWlCOzs7WUFMbEIsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7SUFhRTtLQUVDOzs7O0lBRUQsUUFBUTtLQUNQOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Q0FLWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyx3REFBd0QsQ0FBQzthQUNuRTs7Ozs7Ozs7Ozs7O1lDc0NBLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQixlQUFlO29CQUNmLHFCQUFxQjtvQkFDckIsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQix3QkFBd0I7b0JBQ3hCLHVCQUF1QjtvQkFDdkIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCxhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO2lCQUNqQjthQUNGOzs7Ozs7O0FDekZEO0lBc0JFO0tBQ0M7Ozs7O0lBQ0QsV0FBVyxDQUFDLE9BQVk7UUFDdEIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ2pELElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTs7Z0JBRW5DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7YUFDdEM7U0FDRjtLQUNGOzs7O0lBQ0QsUUFBUTtLQUVQOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O2lCQVlLO2dCQUNmLE1BQU0sRUFBRSxDQUFDLDRiQUE0YixDQUFDO2FBQ3ZjOzs7OztxQkFHRSxLQUFLOzs7Ozs7O0FDckJSO0lBMkJFOzBCQUh1QixJQUFJLFlBQVksRUFBVTtLQUdoQzs7OztJQUVqQixRQUFRO0tBRVA7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztDQWNYO2dCQUNDLE1BQU0sRUFBRSxDQUFDLHNSQUFzUixDQUFDO2FBQ2pTOzs7Ozt3QkFFRSxLQUFLO3lCQUNMLE1BQU07Ozs7Ozs7QUN4QlQ7OztZQVVDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO2dCQUN4RixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7YUFFcEY7Ozs7Ozs7Ozs7Ozs7OzsifQ==