import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrersPageComponent } from './carrers-page.component';

describe('CarrersPageComponent', () => {
  let component: CarrersPageComponent;
  let fixture: ComponentFixture<CarrersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrersPageComponent]
    });
    fixture = TestBed.createComponent(CarrersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
