import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEntepriseComponent } from './details-enteprise.component';

describe('DetailsEntepriseComponent', () => {
  let component: DetailsEntepriseComponent;
  let fixture: ComponentFixture<DetailsEntepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEntepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEntepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
