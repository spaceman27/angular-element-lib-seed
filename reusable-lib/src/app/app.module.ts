import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { LoginModule, LoginComponent, FieldConfig, Validator } from '@sita/login';
import { MatcoreModule, 
  NavbarComponent, 
  NavbarItemComponent, 
  ToolbarComponent
} from '@sita/matcore';

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
    LoginModule,
    CommonModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  // bootstrap: [AppComponent],
  entryComponents: [
    NavbarComponent,
    NavbarItemComponent,
    ToolbarComponent,
    LoginComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    // sign up for component elements
    // component names should be prefix ng- to be different from an angular component name
    // or the component will rendered two times in angular app
    const el = createCustomElement(NavbarComponent, { injector: this.injector });
    customElements.define('ng-sitamat-navbar', el);

    const navbarItem = createCustomElement(NavbarItemComponent, { injector: this.injector });
    customElements.define('ng-sitamat-navbar-item', navbarItem);

    const toolbar = createCustomElement(ToolbarComponent, { injector: this.injector });
    customElements.define('ng-sitamat-toolbar', toolbar);

    const login = createCustomElement(LoginComponent, { injector: this.injector });
    customElements.define('ng-sita-login', login);
    
   }
}
