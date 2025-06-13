import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDetailComponent } from './developer-detail.component';

describe('DeveloperDetailComponent', () => {
  let component: DeveloperDetailComponent;
  let fixture: ComponentFixture<DeveloperDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperDetailComponent]
    });
    fixture = TestBed.createComponent(DeveloperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
