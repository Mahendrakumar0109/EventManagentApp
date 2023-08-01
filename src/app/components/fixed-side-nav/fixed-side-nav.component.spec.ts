import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSideNavComponent } from './fixed-side-nav.component';

describe('FixedSideNavComponent', () => {
  let component: FixedSideNavComponent;
  let fixture: ComponentFixture<FixedSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedSideNavComponent]
    });
    fixture = TestBed.createComponent(FixedSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
