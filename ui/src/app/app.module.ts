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
import {
  AllLowerCasePipe,
  KebabCasePipe,
  LowerSnakeCasePipe,
  PascalCasePipe,
  UpperSnakeCasePipe,
} from 'src/app/utils/case.pipe';
import {ClassificationSelectorComponent} from './plugin-form/element-form/classification-selector/classification-selector.component';
import {PropertyFormComponent} from './plugin-form/element-form/property-form/property-form.component';
import {NavigationComponent} from 'src/app/navigation/navigation.component';
import {Ng2TrackScrollModule} from 'ng2-track-scroll';
import {CustomFormsModule} from 'ngx-custom-validators';
import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PadFormComponent} from './plugin-form/element-form/pad-form/pad-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PluginFormComponent,
    PreventDefaultDirective,

    ElementFormComponent,
    NewIdPipe,
    LastIdPipe,
    PascalCasePipe,
    AllLowerCasePipe,
    UpperSnakeCasePipe,
    LowerSnakeCasePipe,
    KebabCasePipe,
    ClassificationSelectorComponent,
    PropertyFormComponent,
    NavigationComponent,
    PadFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    Ng2TrackScrollModule.forRoot(),
    CustomFormsModule,
    TagInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
