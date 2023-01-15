import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDetallesComponent } from './restaurante-detalles.component';

describe('RestauranteDetallesComponent', () => {
  let component: RestauranteDetallesComponent;
  let fixture: ComponentFixture<RestauranteDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
