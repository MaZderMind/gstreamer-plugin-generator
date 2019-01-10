import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertyFormComponent} from './property-form.component';
import {Property} from 'src/app/model/property';
import {NewIdPipe} from 'src/app/utils/id-pipe/new-id-pipe';
import {LastIdPipe} from 'src/app/utils/id-pipe/last-id-pipe';
import {KebabCasePipe} from 'src/app/utils/case.pipe';
import {ControlContainer, FormsModule, NgForm} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('PropertyFormComponent', () => {
  let component: PropertyFormComponent;
  let fixture: ComponentFixture<PropertyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PropertyFormComponent,
        NewIdPipe, LastIdPipe,
        KebabCasePipe,
      ],
      imports: [
        FormsModule,
        TagInputModule,
        NoopAnimationsModule,
      ],
      providers: [
        ControlContainer,
        NgForm,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyFormComponent);
    component = fixture.componentInstance;
    component.property = new Property();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
