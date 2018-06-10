import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltopdfComponent } from './htmltopdf.component';

describe('HtmltopdfComponent', () => {
  let component: HtmltopdfComponent;
  let fixture: ComponentFixture<HtmltopdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmltopdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
