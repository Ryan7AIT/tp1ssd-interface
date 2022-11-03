import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdps3Component } from './mdps3.component';

describe('Mdps3Component', () => {
  let component: Mdps3Component;
  let fixture: ComponentFixture<Mdps3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mdps3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mdps3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
