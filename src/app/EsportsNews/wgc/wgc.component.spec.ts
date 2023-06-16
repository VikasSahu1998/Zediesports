import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGCComponent } from './wgc.component';

describe('WGCComponent', () => {
  let component: WGCComponent;
  let fixture: ComponentFixture<WGCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGCComponent]
    });
    fixture = TestBed.createComponent(WGCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
