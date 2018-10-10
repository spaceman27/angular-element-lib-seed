import { NgModule } from '@angular/core';
import { MatcoreComponent } from './matcore.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ToolbarComponent } from './navbar/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [MatcoreComponent, NavbarComponent, NavbarItemComponent, ToolbarComponent],
  exports: [MatcoreComponent, NavbarComponent, NavbarItemComponent, ToolbarComponent]

})
export class MatcoreModule {}
