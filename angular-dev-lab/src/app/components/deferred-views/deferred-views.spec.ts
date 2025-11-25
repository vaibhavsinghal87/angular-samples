import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredViews } from './deferred-views';

describe('DeferredViews', () => {
  let component: DeferredViews;
  let fixture: ComponentFixture<DeferredViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredViews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredViews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
