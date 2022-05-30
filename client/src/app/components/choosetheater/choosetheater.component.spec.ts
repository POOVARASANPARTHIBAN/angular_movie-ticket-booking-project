import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosetheaterComponent } from './choosetheater.component';

describe('ChoosetheaterComponent', () => {
  let component: ChoosetheaterComponent;
  let fixture: ComponentFixture<ChoosetheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosetheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosetheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
