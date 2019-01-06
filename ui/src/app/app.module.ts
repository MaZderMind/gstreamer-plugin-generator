import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from 'src/app/app.component';
import {PluginFormComponent} from 'src/app/plugin-form/plugin-form.component';
import {FormsModule} from '@angular/forms';
import {PreventDefaultDirective} from 'src/app/utils/prevent-default.directive';
import {ElementFormComponent} from 'src/app/plugin-form/element-form/element-form.component';
import {LastIdPipe} from 'src/app/utils/id-pipe/last-id-pipe';
import {NewIdPipe} from 'src/app/utils/id-pipe/new-id-pipe';
import {HttpClientModule} from '@angular/common/http';
import {GstBaseTransformFormComponent} from 'src/app/plugin-form/element-form/gst-base-transform-form/gst-base-transform-form.component';
import {AllLowerCasePipe, LowerSnakeCasePipe, PascalCasePipe, UpperSnakeCasePipe} from 'src/app/utils/case.pipe';
import {ClassificationSelectorComponent} from './plugin-form/element-form/classification-selector/classification-selector.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    PluginFormComponent,
    PreventDefaultDirective,
    GstBaseTransformFormComponent,

    ElementFormComponent,
    NewIdPipe,
    LastIdPipe,
    PascalCasePipe,
    AllLowerCasePipe,
    UpperSnakeCasePipe,
    LowerSnakeCasePipe,
    ClassificationSelectorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
