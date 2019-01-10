import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassificationSelectorComponent} from './classification-selector.component';
import {FormsModule} from '@angular/forms';

import {Element} from 'src/app/model/element';
import {TagInputModule} from 'ngx-chips';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('ClassificationSelectorComponent', () => {
  let component: ClassificationSelectorComponent;
  let fixture: ComponentFixture<ClassificationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassificationSelectorComponent],
      imports: [
        FormsModule,
        TagInputModule,
        NoopAnimationsModule,
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
