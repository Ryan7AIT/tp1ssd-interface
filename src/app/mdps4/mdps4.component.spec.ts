import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdps4Component } from './mdps4.component';

describe('Mdps4Component', () => {
  let component: Mdps4Component;
  let fixture: ComponentFixture<Mdps4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mdps4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mdps4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
