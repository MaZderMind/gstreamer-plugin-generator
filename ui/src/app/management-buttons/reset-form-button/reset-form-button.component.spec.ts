import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ResetFormButtonComponent} from './reset-form-button.component';
import {MockComponent} from 'ng2-mock-component';

describe('ResetFormButtonComponent', () => {
  let component: ResetFormButtonComponent;
  let fixture: ComponentFixture<ResetFormButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResetFormButtonComponent,
        MockComponent({selector: 'app-confirm-dialog', inputs: ['closeAfterClick']}),
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
