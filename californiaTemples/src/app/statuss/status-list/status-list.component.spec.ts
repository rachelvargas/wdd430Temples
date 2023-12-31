import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListComponent } from './status-list.component';

describe('StatusListComponent', () => {
  let component: StatusListComponent;
  let fixture: ComponentFixture<StatusListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusListComponent]
    });
    fixture = TestBed.createComponent(StatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
