import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosemovieComponent } from './choosemovie.component';

describe('ChoosemovieComponent', () => {
  let component: ChoosemovieComponent;
  let fixture: ComponentFixture<ChoosemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosemovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
