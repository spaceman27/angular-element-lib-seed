/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'sitamat-navbar-item',
                    template: "<mat-list-item [ngClass]=\"{ 'active': active}\">   \n  <div class=\"nav-item\">\n      <div class=\"link-item\">\n        <span>\n          <ng-content select=\"[icon-html]\"></ng-content>  \n        </span>\n        <span class=\"nav-text\">\n          <ng-content select=\"[nav-text]\"></ng-content>\n        </span>\n      </div>\n  </div>\n  <mat-divider></mat-divider>\n</mat-list-item>",
                    styles: [".nav-item{width:100%;text-align:center}.nav-item mat-icon{font-size:2.5em;width:40px;height:40px}.nav-item a{font-weight:700}.link-item{display:flex;flex-direction:column}.nav-text{font-size:14px}.mat-list-item{height:80px!important;text-decoration:none}.mat-list-item:hover{background:rgba(0,0,0,.05)}.active ::ng-deep .mat-list-item-content{background:#fff!important;margin-left:8px;border-top-left-radius:5px;border-bottom-left-radius:5px}"]
                },] },
    ];
    /** @nocollapse */
    NavbarItemComponent.ctorParameters = function () { return []; };
    NavbarItemComponent.propDecorators = {
        active: [{ type: Input }]
    };
    return NavbarItemComponent;
}());
export { NavbarItemComponent };
if (false) {
    /** @type {?} */
    NavbarItemComponent.prototype.active;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbWF0Y29yZS8iLCJzb3VyY2VzIjpbImxpYi9uYXZiYXIvbmF2YmFyLWl0ZW0vbmF2YmFyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7O0lBc0J4RjtLQUNDOzs7OztJQUNELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFZO1FBQ3RCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUNqRCxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7O2dCQUVuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDO2FBQ3RDO1NBQ0Y7S0FDRjs7OztJQUNELHNDQUFROzs7SUFBUjtLQUVDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSwwWUFZSztvQkFDZixNQUFNLEVBQUUsQ0FBQyw0YkFBNGIsQ0FBQztpQkFDdmM7Ozs7O3lCQUdFLEtBQUs7OzhCQXJCUjs7U0FtQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpdGFtYXQtbmF2YmFyLWl0ZW0nLFxuICB0ZW1wbGF0ZTogYDxtYXQtbGlzdC1pdGVtIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZSc6IGFjdGl2ZX1cIj4gICBcbiAgPGRpdiBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltpY29uLWh0bWxdXCI+PC9uZy1jb250ZW50PiAgXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtdGV4dFwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltuYXYtdGV4dF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48L21hdC1saXN0LWl0ZW0+YCxcbiAgc3R5bGVzOiBbYC5uYXYtaXRlbXt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfS5uYXYtaXRlbSBtYXQtaWNvbntmb250LXNpemU6Mi41ZW07d2lkdGg6NDBweDtoZWlnaHQ6NDBweH0ubmF2LWl0ZW0gYXtmb250LXdlaWdodDo3MDB9LmxpbmstaXRlbXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5uYXYtdGV4dHtmb250LXNpemU6MTRweH0ubWF0LWxpc3QtaXRlbXtoZWlnaHQ6ODBweCFpbXBvcnRhbnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm1hdC1saXN0LWl0ZW06aG92ZXJ7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wNSl9LmFjdGl2ZSA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudHtiYWNrZ3JvdW5kOiNmZmYhaW1wb3J0YW50O21hcmdpbi1sZWZ0OjhweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweH1gXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmUgJiYgY2hhbmdlcy5hY3RpdmUuY3VycmVudFZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYWN0aXZlID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBSRUFDVCBDT01QQVQgRklYOiB0cnkgdG8gY29udmVydCBzdHJpbmcgdG8gYm9vbGVhblxuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuYWN0aXZlID09PSAndHJ1ZSc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIFxuICB9XG59XG4iXX0=