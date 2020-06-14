import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVentaComponent } from './list-venta.component';

describe('ListVentaComponent', () => {
  let component: ListVentaComponent;
  let fixture: ComponentFixture<ListVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
