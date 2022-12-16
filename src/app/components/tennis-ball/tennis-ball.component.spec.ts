import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisBallComponent } from './tennis-ball.component';

describe('TennisBallComponent', () => {
  let component: TennisBallComponent;
  let fixture: ComponentFixture<TennisBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisBallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
