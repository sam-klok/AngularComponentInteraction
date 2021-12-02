import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildVarComponent } from './child-var.component';

describe('ChildVarComponent', () => {
  let component: ChildVarComponent;
  let fixture: ComponentFixture<ChildVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildVarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
