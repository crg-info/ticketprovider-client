import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBussesComponent } from './search-busses.component';

describe('SearchBussesComponent', () => {
  let component: SearchBussesComponent;
  let fixture: ComponentFixture<SearchBussesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBussesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
