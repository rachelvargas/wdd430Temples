import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleItemComponent } from './temple-item.component';

describe('TempleItemComponent', () => {
  let component: TempleItemComponent;
  let fixture: ComponentFixture<TempleItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleItemComponent]
    });
    fixture = TestBed.createComponent(TempleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
