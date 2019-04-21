import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypesManagerComponent } from './leave-types-manager.component';

describe('LeaveTypesManagerComponent', () => {
  let component: LeaveTypesManagerComponent;
  let fixture: ComponentFixture<LeaveTypesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTypesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
