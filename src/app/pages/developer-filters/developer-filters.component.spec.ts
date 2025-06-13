import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperFiltersComponent } from './developer-filters.component';

describe('DeveloperFiltersComponent', () => {
  let component: DeveloperFiltersComponent;
  let fixture: ComponentFixture<DeveloperFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperFiltersComponent]
    });
    fixture = TestBed.createComponent(DeveloperFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
