import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PluginFormComponent} from './plugin-form.component';
import {Plugin} from 'src/app/model/plugin';
import {NewIdPipe} from 'src/app/utils/id-pipe/new-id-pipe';
import {LastIdPipe} from 'src/app/utils/id-pipe/last-id-pipe';
import {FormsModule} from '@angular/forms';
import {MockComponent} from 'ng2-mock-component';
import {AllLowerCasePipe, LowerSnakeCasePipe, PascalCasePipe, UpperSnakeCasePipe} from 'src/app/utils/case.pipe';
import {UniqueNameValidator} from 'src/app/validator/unique-name-validator.directive';

describe('PluginFormComponent', () => {
  let component: PluginFormComponent;
  let fixture: ComponentFixture<PluginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PluginFormComponent,
        NewIdPipe, LastIdPipe,
        AllLowerCasePipe, PascalCasePipe, UpperSnakeCasePipe, LowerSnakeCasePipe,
        UniqueNameValidator,

        MockComponent({selector: 'app-element-form', inputs: ['element', 'elements', 'index']})
      ],
      imports: [FormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginFormComponent);
    component = fixture.componentInstance;
    component.plugin = new Plugin();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
