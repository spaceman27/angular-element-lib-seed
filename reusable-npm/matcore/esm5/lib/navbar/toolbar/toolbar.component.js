/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.changeLang = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'sitamat-toolbar',
                    template: "<mat-toolbar class=\"mat-elevation-z6 navbar\" color=\"primary\">\n  <div fxHide.gt-sm fxLayoutAlign=\"start center\">\n    <button class=\"menu-button\" mat-icon-button>\n      <mat-icon>menu</mat-icon>\n    </button>\n    <ng-content select=\"[toolbar-title]\"></ng-content> \n  </div>\n  <span fxFlex>\n    <ng-content select=\"[toolbar-content]\"></ng-content>\n  </span>\n  <span fxFlex>\n      <ng-content select=\"[toolbar-lang]\"></ng-content>\n  </span>\n</mat-toolbar>\n",
                    styles: [".navbar{position:fixed;top:0;left:0;right:0;z-index:1}.brand{color:#fff;text-decoration:none;padding-right:1rem}.menu-button{margin-right:1rem}.mat-toolbar.mat-primary{background:#2196f3;color:#fff}.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}"]
                },] },
    ];
    /** @nocollapse */
    ToolbarComponent.ctorParameters = function () { return []; };
    ToolbarComponent.propDecorators = {
        languages: [{ type: Input }],
        changeLang: [{ type: Output }]
    };
    return ToolbarComponent;
}());
export { ToolbarComponent };
if (false) {
    /** @type {?} */
    ToolbarComponent.prototype.languages;
    /** @type {?} */
    ToolbarComponent.prototype.changeLang;
    /** @type {?} */
    ToolbarComponent.prototype.language;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2l0YS9tYXRjb3JlLyIsInNvdXJjZXMiOlsibGliL25hdmJhci90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTJCN0U7MEJBSHVCLElBQUksWUFBWSxFQUFVO0tBR2hDOzs7O0lBRWpCLG1DQUFROzs7SUFBUjtLQUVDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxrZUFjWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxzUkFBc1IsQ0FBQztpQkFDalM7Ozs7OzRCQUVFLEtBQUs7NkJBQ0wsTUFBTTs7MkJBeEJUOztTQXNCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2l0YW1hdC10b29sYmFyJyxcbiAgdGVtcGxhdGU6IGA8bWF0LXRvb2xiYXIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo2IG5hdmJhclwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICA8ZGl2IGZ4SGlkZS5ndC1zbSBmeExheW91dEFsaWduPVwic3RhcnQgY2VudGVyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1lbnUtYnV0dG9uXCIgbWF0LWljb24tYnV0dG9uPlxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt0b29sYmFyLXRpdGxlXVwiPjwvbmctY29udGVudD4gXG4gIDwvZGl2PlxuICA8c3BhbiBmeEZsZXg+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2xiYXItY29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gZnhGbGV4PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2xiYXItbGFuZ11cIj48L25nLWNvbnRlbnQ+XG4gIDwvc3Bhbj5cbjwvbWF0LXRvb2xiYXI+XG5gLFxuICBzdHlsZXM6IFtgLm5hdmJhcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjF9LmJyYW5ke2NvbG9yOiNmZmY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7cGFkZGluZy1yaWdodDoxcmVtfS5tZW51LWJ1dHRvbnttYXJnaW4tcmlnaHQ6MXJlbX0ubWF0LXRvb2xiYXIubWF0LXByaW1hcnl7YmFja2dyb3VuZDojMjE5NmYzO2NvbG9yOiNmZmZ9Lm1hdC1idXR0b24sLm1hdC1pY29uLWJ1dHRvbiwubWF0LXN0cm9rZWQtYnV0dG9ue2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZDowIDB9YF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhbmd1YWdlczogYW55O1xuICBAT3V0cHV0KCkgY2hhbmdlTGFuZyA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cbn1cbiJdfQ==