import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSlidingComponent } from './horizontal-sliding.component';

describe('HorizontalSlidingComponent', () => {
  let component: HorizontalSlidingComponent;
  let fixture: ComponentFixture<HorizontalSlidingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalSlidingComponent]
    });
    fixture = TestBed.createComponent(HorizontalSlidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
