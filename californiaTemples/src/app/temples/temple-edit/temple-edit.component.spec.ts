import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleEditComponent } from './temple-edit.component';

describe('TempleEditComponent', () => {
  let component: TempleEditComponent;
  let fixture: ComponentFixture<TempleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleEditComponent]
    });
    fixture = TestBed.createComponent(TempleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
