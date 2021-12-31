import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseCreationComponent } from './entreprise-creation.component';

describe('EntrepriseCreationComponent', () => {
  let component: EntrepriseCreationComponent;
  let fixture: ComponentFixture<EntrepriseCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
