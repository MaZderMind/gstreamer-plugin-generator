import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginFormComponent } from './plugin-form.component';

describe('PluginFormComponent', () => {
  let component: PluginFormComponent;
  let fixture: ComponentFixture<PluginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
