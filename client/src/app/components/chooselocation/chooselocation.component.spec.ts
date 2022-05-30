import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooselocationComponent } from './chooselocation.component';

describe('ChooselocationComponent', () => {
  let component: ChooselocationComponent;
  let fixture: ComponentFixture<ChooselocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooselocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooselocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
