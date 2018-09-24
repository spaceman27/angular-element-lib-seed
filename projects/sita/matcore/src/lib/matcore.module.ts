import { NgModule, Injector } from '@angular/core';
import { MatcoreComponent } from './matcore.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [MatcoreComponent, NavbarComponent],
  exports: [MatcoreComponent, NavbarComponent]

})
export class MatcoreModule {}
