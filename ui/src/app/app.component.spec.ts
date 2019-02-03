import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MockComponent} from 'ng2-mock-component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent({selector: 'app-plugin-form', inputs: ['plugin']}),
        MockComponent({selector: 'app-form-error-display', inputs: ['form']}),
        MockComponent({selector: 'app-reset-form-button'}),
        MockComponent({selector: 'app-upload-button'}),
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
