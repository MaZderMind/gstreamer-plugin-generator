import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PluginFormComponent} from './plugin-form/plugin-form.component';
import {FormsModule} from "@angular/forms";
import {PreventDefaultDirective} from './utils/prevent-default.directive';
import {ElementFormComponent} from './plugin-form/element-form/element-form.component';
import {LastIdPipe} from "src/app/utils/id-pipe/last-id-pipe";
import {NewIdPipe} from "src/app/utils/id-pipe/new-id-pipe";
import {HttpClientModule} from "@angular/common/http";
import {GstBaseTransformFormComponent} from './plugin-form/element-form/gst-base-transform-form/gst-base-transform-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PluginFormComponent,
    PreventDefaultDirective,
    ElementFormComponent,

    NewIdPipe,
    LastIdPipe,
    GstBaseTransformFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
