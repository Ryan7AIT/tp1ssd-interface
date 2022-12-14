import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDetailsComponent } from './msg-details.component';

describe('MsgDetailsComponent', () => {
  let component: MsgDetailsComponent;
  let fixture: ComponentFixture<MsgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
