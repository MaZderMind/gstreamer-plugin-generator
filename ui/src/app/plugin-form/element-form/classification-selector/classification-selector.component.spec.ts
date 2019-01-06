import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassificationSelectorComponent} from './classification-selector.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';

import {Element} from 'src/app/model/element';

describe('ClassificationSelectorComponent', () => {
  let component: ClassificationSelectorComponent;
  let fixture: ComponentFixture<ClassificationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificationSelectorComponent],
      imports: [
        FormsModule,
        NgMultiSelectDropDownModule.forRoot(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationSelectorComponent);
    component = fixture.componentInstance;
    component.element = new Element();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
