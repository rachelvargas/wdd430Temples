import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatussComponent } from './statuss.component';

describe('StatussComponent', () => {
  let component: StatussComponent;
  let fixture: ComponentFixture<StatussComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatussComponent]
    });
    fixture = TestBed.createComponent(StatussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
