import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBussesComponent } from './add-busses.component';

describe('AddBussesComponent', () => {
  let component: AddBussesComponent;
  let fixture: ComponentFixture<AddBussesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBussesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
