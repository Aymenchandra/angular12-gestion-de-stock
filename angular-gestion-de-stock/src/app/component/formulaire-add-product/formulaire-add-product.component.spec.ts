import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAddProductComponent } from './formulaire-add-product.component';

describe('FormulaireAddProductComponent', () => {
  let component: FormulaireAddProductComponent;
  let fixture: ComponentFixture<FormulaireAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
