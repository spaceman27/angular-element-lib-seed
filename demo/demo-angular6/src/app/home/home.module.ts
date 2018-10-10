import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatcoreModule, NavbarComponent } from 'sita-ui/sita/matcore';
import { LoginModule, LoginComponent } from 'sita-ui/sita/login';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    MatcoreModule,
    LoginModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ],
  entryComponents: [
    NavbarComponent,
    LoginComponent
  ]
})
export class HomeModule { }
