import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPage1Component } from './cards-page1.component';

describe('CardsPage1Component', () => {
  let component: CardsPage1Component;
  let fixture: ComponentFixture<CardsPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPage1Component]
    });
    fixture = TestBed.createComponent(CardsPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
