import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImport } from './dynamic-import';

describe('DynamicImport', () => {
  let component: DynamicImport;
  let fixture: ComponentFixture<DynamicImport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicImport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicImport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
