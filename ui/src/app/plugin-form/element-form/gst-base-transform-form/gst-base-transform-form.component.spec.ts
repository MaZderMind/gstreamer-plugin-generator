import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstBaseTransformFormComponent } from './gst-base-transform-form.component';

describe('GstBaseTransformFormComponent', () => {
  let component: GstBaseTransformFormComponent;
  let fixture: ComponentFixture<GstBaseTransformFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstBaseTransformFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstBaseTransformFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
