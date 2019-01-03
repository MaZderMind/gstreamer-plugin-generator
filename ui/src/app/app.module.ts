import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PluginFormComponent} from './plugin-form/plugin-form.component';
import {FormsModule} from "@angular/forms";
import {PreventDefaultDirective} from './utils/prevent-default.directive';
import { DefaultPipe } from './utils/default.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PluginFormComponent,
    PreventDefaultDirective,
    DefaultPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
