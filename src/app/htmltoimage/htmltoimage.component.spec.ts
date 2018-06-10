import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmltoimageComponent } from './htmltoimage.component';

describe('HtmltoimageComponent', () => {
  let component: HtmltoimageComponent;
  let fixture: ComponentFixture<HtmltoimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmltoimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmltoimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
