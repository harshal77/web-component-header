import { CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const header = createCustomElement(AppComponent, { injector: this.injector })
    customElements.define('header-app', header);
  }

  ngDoBootstrap() { }

}
