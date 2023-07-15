import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDetailComponent } from './temple-detail.component';

describe('TempleDetailComponent', () => {
  let component: TempleDetailComponent;
  let fixture: ComponentFixture<TempleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleDetailComponent]
    });
    fixture = TestBed.createComponent(TempleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
