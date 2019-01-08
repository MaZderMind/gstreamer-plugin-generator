import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadFormComponent } from './pad-form.component';

describe('PadFormComponent', () => {
  let component: PadFormComponent;
  let fixture: ComponentFixture<PadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
