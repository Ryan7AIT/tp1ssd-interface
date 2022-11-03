import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StegComponent } from './steg.component';

describe('StegComponent', () => {
  let component: StegComponent;
  let fixture: ComponentFixture<StegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
