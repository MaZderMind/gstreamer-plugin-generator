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
import {CustomFormsModule} from 'ngx-custom-validators';
import {TagInputModule} from 'ngx-chips';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UniqueNameValidator} from 'src/app/validator/unique-name-validator.directive';
import {UniqueItemsValidator} from 'src/app/validator/unique-items-validator.directive';
import {FormErrorDisplayComponent} from './plugin-form/form-error-display/form-error-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PluginFormComponent,
    PreventDefaultDirective,
    UniqueNameValidator,
    UniqueItemsValidator,

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
    FormErrorDisplayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    TagInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
