import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubBannerComponent } from './github-banner.component';

describe('GithubBannerComponent', () => {
  let component: GithubBannerComponent;
  let fixture: ComponentFixture<GithubBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
