import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: EnterpriseDetailsComponent;
  let fixture: ComponentFixture<EnterpriseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
