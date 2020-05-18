import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistribuidorComponent } from './add-distribuidor.component';

describe('AddDistribuidorComponent', () => {
  let component: AddDistribuidorComponent;
  let fixture: ComponentFixture<AddDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
