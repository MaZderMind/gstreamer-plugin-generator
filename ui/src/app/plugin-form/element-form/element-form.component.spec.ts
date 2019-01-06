import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Element} from 'src/app/model/element';
import {ElementFormComponent} from './element-form.component';
import {NewIdPipe} from 'src/app/utils/id-pipe/new-id-pipe';
import {LastIdPipe} from 'src/app/utils/id-pipe/last-id-pipe';
import {ControlContainer, FormsModule, NgForm} from '@angular/forms';
import {AllLowerCasePipe, LowerSnakeCasePipe, PascalCasePipe, UpperSnakeCasePipe} from 'src/app/utils/case.pipe';
import {MockComponent} from 'ng2-mock-component';

describe('ElementFormComponent', () => {
  let component: ElementFormComponent;
  let fixture: ComponentFixture<ElementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ElementFormComponent,
        NewIdPipe, LastIdPipe,
        AllLowerCasePipe, PascalCasePipe, UpperSnakeCasePipe, LowerSnakeCasePipe,

        MockComponent({selector: 'app-gst-base-transform-form', inputs: ['element']}),
        MockComponent({selector: 'app-classification-selector', inputs: ['element']}),
      ],
      imports: [FormsModule],
      providers: [
        ControlContainer,
        NgForm,
      ]
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
