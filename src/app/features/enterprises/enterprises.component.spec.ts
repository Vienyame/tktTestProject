import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let component: EnterprisesComponent;
  let fixture: ComponentFixture<EnterprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
