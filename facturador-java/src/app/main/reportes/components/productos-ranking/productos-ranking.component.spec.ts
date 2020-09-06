import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosRankingComponent } from './productos-ranking.component';

describe('ProductosRankingComponent', () => {
  let component: ProductosRankingComponent;
  let fixture: ComponentFixture<ProductosRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
