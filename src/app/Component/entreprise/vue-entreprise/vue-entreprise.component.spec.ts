import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VueEntrepriseComponent } from './vue-entreprise.component';

describe('VueEntrepriseComponent', () => {
  let component: VueEntrepriseComponent;
  let fixture: ComponentFixture<VueEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VueEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VueEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
