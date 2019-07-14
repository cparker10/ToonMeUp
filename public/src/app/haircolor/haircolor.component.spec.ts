import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircolorComponent } from './haircolor.component';

describe('HaircolorComponent', () => {
  let component: HaircolorComponent;
  let fixture: ComponentFixture<HaircolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaircolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
