import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAssignComponent } from './leave-assign.component';

describe('LeaveAssignComponent', () => {
  let component: LeaveAssignComponent;
  let fixture: ComponentFixture<LeaveAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
