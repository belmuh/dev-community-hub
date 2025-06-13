import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopersPageComponent } from './developers-page.component';

describe('DevelopersPageComponent', () => {
  let component: DevelopersPageComponent;
  let fixture: ComponentFixture<DevelopersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelopersPageComponent]
    });
    fixture = TestBed.createComponent(DevelopersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
