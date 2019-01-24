import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Element} from 'src/app/model/element';
import {ElementFormComponent} from './element-form.component';
import {NewIdPipe} from 'src/app/utils/id-pipe/new-id-pipe';
import {LastIdPipe} from 'src/app/utils/id-pipe/last-id-pipe';
import {ControlContainer, FormsModule, NgForm} from '@angular/forms';
import {AllLowerCasePipe, LowerSnakeCasePipe, PascalCasePipe, UpperSnakeCasePipe} from 'src/app/utils/case.pipe';
import {MockComponent} from 'ng2-mock-component';
import {Ng2TrackScrollModule} from 'ng2-track-scroll';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TagInputModule} from 'ngx-chips';
import {UniqueNameValidator} from 'src/app/validator/unique-name-validator.directive';

describe('ElementFormComponent', () => {
  let component: ElementFormComponent;
  let fixture: ComponentFixture<ElementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ElementFormComponent,
        NewIdPipe, LastIdPipe,
        AllLowerCasePipe, PascalCasePipe, UpperSnakeCasePipe, LowerSnakeCasePipe,
        UniqueNameValidator,

        MockComponent({selector: 'app-gst-base-transform-form', inputs: ['element']}),
        MockComponent({selector: 'app-classification-selector', inputs: ['element']}),
        MockComponent({selector: 'app-property-form', inputs: ['property', 'properties']}),
        MockComponent({selector: 'app-pad-form', inputs: ['direction']}),
      ],
      imports: [
        FormsModule,
        Ng2TrackScrollModule.forRoot(),
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
    fixture = TestBed.createComponent(ElementFormComponent);
    component = fixture.componentInstance;
    component.element = new Element();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
