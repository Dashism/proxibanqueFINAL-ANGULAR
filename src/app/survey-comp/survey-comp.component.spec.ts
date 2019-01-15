import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCompComponent } from './survey-comp.component';

describe('SurveyCompComponent', () => {
  let component: SurveyCompComponent;
  let fixture: ComponentFixture<SurveyCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
