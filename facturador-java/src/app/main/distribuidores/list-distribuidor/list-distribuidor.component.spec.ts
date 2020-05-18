import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDistribuidorComponent } from './list-distribuidor.component';

describe('ListDistribuidorComponent', () => {
  let component: ListDistribuidorComponent;
  let fixture: ComponentFixture<ListDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
