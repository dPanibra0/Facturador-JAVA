import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVencerComponent } from './productos-vencer.component';

describe('ProductosVencerComponent', () => {
  let component: ProductosVencerComponent;
  let fixture: ComponentFixture<ProductosVencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosVencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosVencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
