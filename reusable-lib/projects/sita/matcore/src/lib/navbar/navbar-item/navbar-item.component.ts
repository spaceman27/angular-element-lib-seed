import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'sitamat-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit, OnChanges {
  
  @Input() active: boolean;
  constructor() {
  }
  ngOnChanges(changes: any): void {
    if (changes.active && changes.active.currentValue) {
      if (typeof this.active === 'string') {
        // REACT COMPAT FIX: try to convert string to boolean
        this.active = this.active === 'true';
      }
    }
  }
  ngOnInit() {
    
  }
}
