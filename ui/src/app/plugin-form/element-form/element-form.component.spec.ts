import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFormComponent } from './element-form.component';

describe('ElementFormComponent', () => {
  let component: ElementFormComponent;
  let fixture: ComponentFixture<ElementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
