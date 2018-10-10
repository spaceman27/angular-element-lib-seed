/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ToolbarComponent {
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
if (false) {
    /** @type {?} */
    ToolbarComponent.prototype.languages;
    /** @type {?} */
    ToolbarComponent.prototype.changeLang;
    /** @type {?} */
    ToolbarComponent.prototype.language;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0YS9tYXRjb3JlLyIsInNvdXJjZXMiOlsibGliL25hdmJhci90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBc0IvRSxNQUFNO0lBS0o7MEJBSHVCLElBQUksWUFBWSxFQUFVO0tBR2hDOzs7O0lBRWpCLFFBQVE7S0FFUDs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0NBY1g7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsc1JBQXNSLENBQUM7YUFDalM7Ozs7O3dCQUVFLEtBQUs7eUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaXRhbWF0LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejYgbmF2YmFyXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gIDxkaXYgZnhIaWRlLmd0LXNtIGZ4TGF5b3V0QWxpZ249XCJzdGFydCBjZW50ZXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwibWVudS1idXR0b25cIiBtYXQtaWNvbi1idXR0b24+XG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2xiYXItdGl0bGVdXCI+PC9uZy1jb250ZW50PiBcbiAgPC9kaXY+XG4gIDxzcGFuIGZ4RmxleD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbGJhci1jb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuICA8c3BhbiBmeEZsZXg+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdG9vbGJhci1sYW5nXVwiPjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuPC9tYXQtdG9vbGJhcj5cbmAsXG4gIHN0eWxlczogW2AubmF2YmFye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MX0uYnJhbmR7Y29sb3I6I2ZmZjt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nLXJpZ2h0OjFyZW19Lm1lbnUtYnV0dG9ue21hcmdpbi1yaWdodDoxcmVtfS5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtiYWNrZ3JvdW5kOiMyMTk2ZjM7Y29sb3I6I2ZmZn0ubWF0LWJ1dHRvbiwubWF0LWljb24tYnV0dG9uLC5tYXQtc3Ryb2tlZC1idXR0b257Y29sb3I6aW5oZXJpdDtiYWNrZ3JvdW5kOjAgMH1gXVxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFuZ3VhZ2VzOiBhbnk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VMYW5nID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgfVxufVxuIl19