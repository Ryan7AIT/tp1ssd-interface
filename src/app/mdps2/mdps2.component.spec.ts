import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdps2Component } from './mdps2.component';

describe('Mdps2Component', () => {
  let component: Mdps2Component;
  let fixture: ComponentFixture<Mdps2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mdps2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mdps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
