(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@sita/matcore', ['exports', '@angular/core', '@angular/material', '@angular/forms', '@angular/common'], factory) :
    (factory((global.sita = global.sita || {}, global.sita.matcore = {}),global.ng.core,global.ng.material,global.ng.forms,global.ng.common));
}(this, (function (exports,i0,material,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MatcoreService = /** @class */ (function () {
        function MatcoreService() {
        }
        MatcoreService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        MatcoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ MatcoreService.ngInjectableDef = i0.defineInjectable({ factory: function MatcoreService_Factory() { return new MatcoreService(); }, token: MatcoreService, providedIn: "root" });
        return MatcoreService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MatcoreComponent = /** @class */ (function () {
        function MatcoreComponent() {
        }
        /**
         * @return {?}
         */
        MatcoreComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MatcoreComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sitamat-matcore',
                        template: "\n    <p>\n      matcore works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        MatcoreComponent.ctorParameters = function () { return []; };
        return MatcoreComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent() {
        }
        /**
         * @return {?}
         */
        NavbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NavbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sitamat-navbar',
                        template: "<div class=\"mynav\">\n  <mat-nav-list>   \n    <ng-content></ng-content>\n  </mat-nav-list>\n</div>\n",
                        styles: [".mynav{width:8em;background-color:#005485;height:100%}"]
                    },] },
        ];
        /** @nocollapse */
        NavbarComponent.ctorParameters = function () { return []; };
        return NavbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            material.MatAutocompleteModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatCommonModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatFormFieldModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatLineModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatOptionModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatPseudoCheckboxModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSlideToggleModule,
                            material.MatSliderModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatStepperModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule
                        ]
                    },] },
        ];
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NavbarItemComponent = /** @class */ (function () {
        function NavbarItemComponent() {
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NavbarItemComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.active && changes.active.currentValue) {
                    if (typeof this.active === 'string') {
                        // REACT COMPAT FIX: try to convert string to boolean
                        this.active = this.active === 'true';
                    }
                }
            };
        /**
         * @return {?}
         */
        NavbarItemComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NavbarItemComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sitamat-navbar-item',
                        template: "<mat-list-item [ngClass]=\"{ 'active': active}\">   \n  <div class=\"nav-item\">\n      <div class=\"link-item\">\n        <span>\n          <ng-content select=\"[icon-html]\"></ng-content>  \n        </span>\n        <span class=\"nav-text\">\n          <ng-content select=\"[nav-text]\"></ng-content>\n        </span>\n      </div>\n  </div>\n  <mat-divider></mat-divider>\n</mat-list-item>",
                        styles: [".nav-item{width:100%;text-align:center}.nav-item mat-icon{font-size:2.5em;width:40px;height:40px}.nav-item a{font-weight:700}.link-item{display:flex;flex-direction:column}.nav-text{font-size:14px}.mat-list-item{height:80px!important;text-decoration:none}.mat-list-item:hover{background:rgba(0,0,0,.05)}.active ::ng-deep .mat-list-item-content{background:#fff!important;margin-left:8px;border-top-left-radius:5px;border-bottom-left-radius:5px}"]
                    },] },
        ];
        /** @nocollapse */
        NavbarItemComponent.ctorParameters = function () { return []; };
        NavbarItemComponent.propDecorators = {
            active: [{ type: i0.Input }]
        };
        return NavbarItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToolbarComponent = /** @class */ (function () {
        function ToolbarComponent() {
            this.changeLang = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ToolbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ToolbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sitamat-toolbar',
                        template: "<mat-toolbar class=\"mat-elevation-z6 navbar\" color=\"primary\">\n  <div fxHide.gt-sm fxLayoutAlign=\"start center\">\n    <button class=\"menu-button\" mat-icon-button>\n      <mat-icon>menu</mat-icon>\n    </button>\n    <ng-content select=\"[toolbar-title]\"></ng-content> \n  </div>\n  <span fxFlex>\n    <ng-content select=\"[toolbar-content]\"></ng-content>\n  </span>\n  <span fxFlex>\n      <ng-content select=\"[toolbar-lang]\"></ng-content>\n  </span>\n</mat-toolbar>\n",
                        styles: [".navbar{position:fixed;top:0;left:0;right:0;z-index:1}.brand{color:#fff;text-decoration:none;padding-right:1rem}.menu-button{margin-right:1rem}.mat-toolbar.mat-primary{background:#2196f3;color:#fff}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}"]
                    },] },
        ];
        /** @nocollapse */
        ToolbarComponent.ctorParameters = function () { return []; };
        ToolbarComponent.propDecorators = {
            languages: [{ type: i0.Input }],
            changeLang: [{ type: i0.Output }]
        };
        return ToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MatcoreModule = /** @class */ (function () {
        function MatcoreModule() {
        }
        MatcoreModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            MaterialModule,
                        ],
                        declarations: [MatcoreComponent, NavbarComponent, NavbarItemComponent, ToolbarComponent],
                        exports: [MatcoreComponent, NavbarComponent, NavbarItemComponent, ToolbarComponent]
                    },] },
        ];
        return MatcoreModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.MatcoreService = MatcoreService;
    exports.MatcoreComponent = MatcoreComponent;
    exports.MatcoreModule = MatcoreModule;
    exports.NavbarComponent = NavbarComponent;
    exports.NavbarItemComponent = NavbarItemComponent;
    exports.ToolbarComponent = ToolbarComponent;
    exports.ɵa = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0YS1tYXRjb3JlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHNpdGEvbWF0Y29yZS9saWIvbWF0Y29yZS5zZXJ2aWNlLnRzIiwibmc6Ly9Ac2l0YS9tYXRjb3JlL2xpYi9tYXRjb3JlLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbWF0Y29yZS9saWIvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL21hdGNvcmUvbGliL21hdGVyaWFsLm1vZHVsZS50cyIsIm5nOi8vQHNpdGEvbWF0Y29yZS9saWIvbmF2YmFyL25hdmJhci1pdGVtL25hdmJhci1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQHNpdGEvbWF0Y29yZS9saWIvbmF2YmFyL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiLCJuZzovL0BzaXRhL21hdGNvcmUvbGliL21hdGNvcmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWF0Y29yZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaXRhbWF0LW1hdGNvcmUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbWF0Y29yZSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWF0Y29yZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2l0YW1hdC1uYXZiYXInLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJteW5hdlwiPlxuICA8bWF0LW5hdi1saXN0PiAgIFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9tYXQtbmF2LWxpc3Q+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2AubXluYXZ7d2lkdGg6OGVtO2JhY2tncm91bmQtY29sb3I6IzAwNTQ4NTtoZWlnaHQ6MTAwJX1gXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIi8qXG4gKiBUaGlzIG1vZHVsZSBpbXBvcnRzIGFuZCByZS1leHBvcnRzIGFsbCBBbmd1bGFyIE1hdGVyaWFsIG1vZHVsZXMgZm9yIGNvbnZlbmllbmNlLFxuICogc28gb25seSAxIG1vZHVsZSBpbXBvcnQgaXMgbmVlZGVkIGluIHlvdXIgZmVhdHVyZSBtb2R1bGVzLlxuICogU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9nZXR0aW5nLXN0YXJ0ZWQjc3RlcC0zLWltcG9ydC10aGUtY29tcG9uZW50LW1vZHVsZXMuXG4gKlxuICogVG8gb3B0aW1pemUgeW91ciBwcm9kdWN0aW9uIGJ1aWxkcywgeW91IHNob3VsZCBvbmx5IGltcG9ydCB0aGUgY29tcG9uZW50cyB1c2VkIGluIHlvdXIgYXBwLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gIE1hdEJ1dHRvbk1vZHVsZSxcbiAgTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLFxuICBNYXRDYXJkTW9kdWxlLFxuICBNYXRDaGVja2JveE1vZHVsZSxcbiAgTWF0Q2hpcHNNb2R1bGUsXG4gIE1hdENvbW1vbk1vZHVsZSxcbiAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXREaXZpZGVyTW9kdWxlLFxuICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGUsXG4gIE1hdElucHV0TW9kdWxlLFxuICBNYXRMaW5lTW9kdWxlLFxuICBNYXRMaXN0TW9kdWxlLFxuICBNYXRNZW51TW9kdWxlLFxuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBNYXRPcHRpb25Nb2R1bGUsXG4gIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgTWF0UHNldWRvQ2hlY2tib3hNb2R1bGUsXG4gIE1hdFJhZGlvTW9kdWxlLFxuICBNYXRSaXBwbGVNb2R1bGUsXG4gIE1hdFNlbGVjdE1vZHVsZSxcbiAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgTWF0U2xpZGVyTW9kdWxlLFxuICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIE1hdFNvcnRNb2R1bGUsXG4gIE1hdFN0ZXBwZXJNb2R1bGUsXG4gIE1hdFRhYmxlTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRUb29sYmFyTW9kdWxlLFxuICBNYXRUb29sdGlwTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdENvbW1vbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMaW5lTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdE9wdGlvbk1vZHVsZSxcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFBzZXVkb0NoZWNrYm94TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2l0YW1hdC1uYXZiYXItaXRlbScsXG4gIHRlbXBsYXRlOiBgPG1hdC1saXN0LWl0ZW0gW25nQ2xhc3NdPVwieyAnYWN0aXZlJzogYWN0aXZlfVwiPiAgIFxuICA8ZGl2IGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ljb24taHRtbF1cIj48L25nLWNvbnRlbnQ+ICBcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi10ZXh0XCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW25hdi10ZXh0XVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjwvbWF0LWxpc3QtaXRlbT5gLFxuICBzdHlsZXM6IFtgLm5hdi1pdGVte3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9Lm5hdi1pdGVtIG1hdC1pY29ue2ZvbnQtc2l6ZToyLjVlbTt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fS5uYXYtaXRlbSBhe2ZvbnQtd2VpZ2h0OjcwMH0ubGluay1pdGVte2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Lm5hdi10ZXh0e2ZvbnQtc2l6ZToxNHB4fS5tYXQtbGlzdC1pdGVte2hlaWdodDo4MHB4IWltcG9ydGFudDt0ZXh0LWRlY29yYXRpb246bm9uZX0ubWF0LWxpc3QtaXRlbTpob3ZlcntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjA1KX0uYWN0aXZlIDo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50e2JhY2tncm91bmQ6I2ZmZiFpbXBvcnRhbnQ7bWFyZ2luLWxlZnQ6OHB4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4fWBdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIFxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZSAmJiBjaGFuZ2VzLmFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5hY3RpdmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFJFQUNUIENPTVBBVCBGSVg6IHRyeSB0byBjb252ZXJ0IHN0cmluZyB0byBib29sZWFuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgPT09ICd0cnVlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaXRhbWF0LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejYgbmF2YmFyXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gIDxkaXYgZnhIaWRlLmd0LXNtIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24+XG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2xiYXItdGl0bGVdXCI+PC9uZy1jb250ZW50PiBcbiAgPC9kaXY+XG4gIDxzcGFuIGZ4RmxleD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbGJhci1jb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICA8c3BhbiBmeEZsZXg+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbGJhci1sYW5nXVwiPjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuPC9tYXQtdG9vbGJhcj5cbmAsXG4gIHN0eWxlczogW2AubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MX0uYnJhbmR7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nLXJpZ2h0OjFyZW19Lm1lbnUtYnV0dG9ue21hcmdpbi1yaWdodDoxcmVtfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiMyMTk2ZjM7Y29sb3I6I2ZmZn0ubWF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFuZ3VhZ2VzOiBhbnk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VMYW5nID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGNvcmVDb21wb25lbnQgfSBmcm9tICcuL21hdGNvcmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJy4vbWF0ZXJpYWwubW9kdWxlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdmJhckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXItaXRlbS9uYXZiYXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdGVyaWFsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtNYXRjb3JlQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIE5hdmJhckl0ZW1Db21wb25lbnQsIFRvb2xiYXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTWF0Y29yZUNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBOYXZiYXJJdGVtQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIE1hdGNvcmVNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJNYXRBdXRvY29tcGxldGVNb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRCdXR0b25Ub2dnbGVNb2R1bGUiLCJNYXRDYXJkTW9kdWxlIiwiTWF0Q2hlY2tib3hNb2R1bGUiLCJNYXRDaGlwc01vZHVsZSIsIk1hdENvbW1vbk1vZHVsZSIsIk1hdERhdGVwaWNrZXJNb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXREaXZpZGVyTW9kdWxlIiwiTWF0RXhwYW5zaW9uTW9kdWxlIiwiTWF0Rm9ybUZpZWxkTW9kdWxlIiwiTWF0R3JpZExpc3RNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0SW5wdXRNb2R1bGUiLCJNYXRMaW5lTW9kdWxlIiwiTWF0TGlzdE1vZHVsZSIsIk1hdE1lbnVNb2R1bGUiLCJNYXROYXRpdmVEYXRlTW9kdWxlIiwiTWF0T3B0aW9uTW9kdWxlIiwiTWF0UGFnaW5hdG9yTW9kdWxlIiwiTWF0UHJvZ3Jlc3NCYXJNb2R1bGUiLCJNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUiLCJNYXRQc2V1ZG9DaGVja2JveE1vZHVsZSIsIk1hdFJhZGlvTW9kdWxlIiwiTWF0UmlwcGxlTW9kdWxlIiwiTWF0U2VsZWN0TW9kdWxlIiwiTWF0U2lkZW5hdk1vZHVsZSIsIk1hdFNsaWRlVG9nZ2xlTW9kdWxlIiwiTWF0U2xpZGVyTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJNYXRTb3J0TW9kdWxlIiwiTWF0U3RlcHBlck1vZHVsZSIsIk1hdFRhYmxlTW9kdWxlIiwiTWF0VGFic01vZHVsZSIsIk1hdFRvb2xiYXJNb2R1bGUiLCJNYXRUb29sdGlwTW9kdWxlIiwiSW5wdXQiLCJFdmVudEVtaXR0ZXIiLCJPdXRwdXQiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NkJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxpQkFBaUI7d0JBQzNCLFFBQVEsRUFBRSwrQ0FJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OzsrQkFWRDs7Ozs7OztBQ0FBO1FBYUU7U0FFQzs7OztRQUVELGtDQUFROzs7WUFBUjthQUNDOztvQkFoQkZBLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsd0dBS1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsd0RBQXdELENBQUM7cUJBQ25FOzs7OzhCQVhEOzs7Ozs7Ozs7OztvQkNpRENDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BDLDhCQUFxQjs0QkFDckJDLHdCQUFlOzRCQUNmQyw4QkFBcUI7NEJBQ3JCQyxzQkFBYTs0QkFDYkMsMEJBQWlCOzRCQUNqQkMsdUJBQWM7NEJBQ2RDLHdCQUFlOzRCQUNmQyw0QkFBbUI7NEJBQ25CQyx3QkFBZTs0QkFDZkMseUJBQWdCOzRCQUNoQkMsMkJBQWtCOzRCQUNsQkMsMkJBQWtCOzRCQUNsQkMsMEJBQWlCOzRCQUNqQkMsc0JBQWE7NEJBQ2JDLHVCQUFjOzRCQUNkQyxzQkFBYTs0QkFDYkMsc0JBQWE7NEJBQ2JDLHNCQUFhOzRCQUNiQyw0QkFBbUI7NEJBQ25CQyx3QkFBZTs0QkFDZkMsMkJBQWtCOzRCQUNsQkMsNkJBQW9COzRCQUNwQkMsaUNBQXdCOzRCQUN4QkMsZ0NBQXVCOzRCQUN2QkMsdUJBQWM7NEJBQ2RDLHdCQUFlOzRCQUNmQyx3QkFBZTs0QkFDZkMseUJBQWdCOzRCQUNoQkMsNkJBQW9COzRCQUNwQkMsd0JBQWU7NEJBQ2ZDLDBCQUFpQjs0QkFDakJDLHNCQUFhOzRCQUNiQyx5QkFBZ0I7NEJBQ2hCQyx1QkFBYzs0QkFDZEMsc0JBQWE7NEJBQ2JDLHlCQUFnQjs0QkFDaEJDLHlCQUFnQjt5QkFDakI7cUJBQ0Y7OzZCQXpGRDs7Ozs7OztBQ0FBO1FBc0JFO1NBQ0M7Ozs7O1FBQ0QseUNBQVc7Ozs7WUFBWCxVQUFZLE9BQVk7Z0JBQ3RCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtvQkFDakQsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFOzt3QkFFbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztxQkFDdEM7aUJBQ0Y7YUFDRjs7OztRQUNELHNDQUFROzs7WUFBUjthQUVDOztvQkFoQ0Z0QyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFFLDBZQVlLO3dCQUNmLE1BQU0sRUFBRSxDQUFDLDRiQUE0YixDQUFDO3FCQUN2Yzs7Ozs7NkJBR0V1QyxRQUFLOztrQ0FyQlI7Ozs7Ozs7QUNBQTtRQTJCRTs4QkFIdUIsSUFBSUMsZUFBWSxFQUFVO1NBR2hDOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUVDOztvQkE1QkZ4QyxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsUUFBUSxFQUFFLGtlQWNYO3dCQUNDLE1BQU0sRUFBRSxDQUFDLHNSQUFzUixDQUFDO3FCQUNqUzs7Ozs7Z0NBRUV1QyxRQUFLO2lDQUNMRSxTQUFNOzsrQkF4QlQ7Ozs7Ozs7QUNBQTs7OztvQkFVQ3hDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1B5QyxtQkFBWTs0QkFDWkMsaUJBQVc7NEJBQ1gsY0FBYzt5QkFDZjt3QkFDRCxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUM7d0JBQ3hGLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQztxQkFFcEY7OzRCQW5CRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=