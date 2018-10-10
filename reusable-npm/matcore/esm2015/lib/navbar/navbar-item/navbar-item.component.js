/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NavbarItemComponent {
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
if (false) {
    /** @type {?} */
    NavbarItemComponent.prototype.active;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNpdGEvbWF0Y29yZS8iLCJzb3VyY2VzIjpbImxpYi9uYXZiYXIvbmF2YmFyLWl0ZW0vbmF2YmFyLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFtQjFGLE1BQU07SUFHSjtLQUNDOzs7OztJQUNELFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUNqRCxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7O2dCQUVuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDO2FBQ3RDO1NBQ0Y7S0FDRjs7OztJQUNELFFBQVE7S0FFUDs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztpQkFZSztnQkFDZixNQUFNLEVBQUUsQ0FBQyw0YkFBNGIsQ0FBQzthQUN2Yzs7Ozs7cUJBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaXRhbWF0LW5hdmJhci1pdGVtJyxcbiAgdGVtcGxhdGU6IGA8bWF0LWxpc3QtaXRlbSBbbmdDbGFzc109XCJ7ICdhY3RpdmUnOiBhY3RpdmV9XCI+ICAgXG4gIDxkaXYgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbaWNvbi1odG1sXVwiPjwvbmctY29udGVudD4gIFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2LXRleHRcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbmF2LXRleHRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPC9tYXQtbGlzdC1pdGVtPmAsXG4gIHN0eWxlczogW2AubmF2LWl0ZW17d2lkdGg6MTAwJTt0ZXh0LWFsaWduOmNlbnRlcn0ubmF2LWl0ZW0gbWF0LWljb257Zm9udC1zaXplOjIuNWVtO3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9Lm5hdi1pdGVtIGF7Zm9udC13ZWlnaHQ6NzAwfS5saW5rLWl0ZW17ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0ubmF2LXRleHR7Zm9udC1zaXplOjE0cHh9Lm1hdC1saXN0LWl0ZW17aGVpZ2h0OjgwcHghaW1wb3J0YW50O3RleHQtZGVjb3JhdGlvbjpub25lfS5tYXQtbGlzdC1pdGVtOmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMDUpfS5hY3RpdmUgOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnR7YmFja2dyb3VuZDojZmZmIWltcG9ydGFudDttYXJnaW4tbGVmdDo4cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgTmF2YmFySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlICYmIGNoYW5nZXMuYWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFjdGl2ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gUkVBQ1QgQ09NUEFUIEZJWDogdHJ5IHRvIGNvbnZlcnQgc3RyaW5nIHRvIGJvb2xlYW5cbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmFjdGl2ZSA9PT0gJ3RydWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBcbiAgfVxufVxuIl19