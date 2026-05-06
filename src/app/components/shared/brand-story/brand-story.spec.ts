import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discount } from './brand-story';

describe('Discount', () => {
  let component: Discount;
  let fixture: ComponentFixture<Discount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Discount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Discount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
