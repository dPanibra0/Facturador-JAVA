import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosStockComponent } from './productos-stock.component';

describe('ProductosStockComponent', () => {
  let component: ProductosStockComponent;
  let fixture: ComponentFixture<ProductosStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
