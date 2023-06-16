import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IGCComponent } from './igc.component';

describe('IGCComponent', () => {
  let component: IGCComponent;
  let fixture: ComponentFixture<IGCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IGCComponent]
    });
    fixture = TestBed.createComponent(IGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
