import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdps1Component } from './mdps1.component';

describe('Mdps1Component', () => {
  let component: Mdps1Component;
  let fixture: ComponentFixture<Mdps1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mdps1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mdps1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
