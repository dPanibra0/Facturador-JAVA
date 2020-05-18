import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDistribuidorComponent } from './edit-distribuidor.component';

describe('EditDistribuidorComponent', () => {
  let component: EditDistribuidorComponent;
  let fixture: ComponentFixture<EditDistribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDistribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
