import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

import { MatcoreModule, NavbarComponent } from '@sita/matcore';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatcoreModule,
    RouterModule,

    CommonModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  // bootstrap: [AppComponent],
  entryComponents: [
    NavbarComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    // Naming elements
    const el = createCustomElement(NavbarComponent, { injector: this.injector });
    customElements.define('ng-sitamat-navbar', el);
   }
}
