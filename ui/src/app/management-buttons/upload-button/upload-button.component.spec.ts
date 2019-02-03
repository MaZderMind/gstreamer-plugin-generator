import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadButtonComponent} from './upload-button.component';
import {MockComponent} from 'ng2-mock-component';

describe('UploadButtonComponent', () => {
  let component: UploadButtonComponent;
  let fixture: ComponentFixture<UploadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadButtonComponent,
        MockComponent({selector: 'app-confirm-dialog', inputs: ['closeAfterClick', 'showPositive']}),
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
