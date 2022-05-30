import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievebookingComponent } from './retrievebooking.component';

describe('RetrievebookingComponent', () => {
  let component: RetrievebookingComponent;
  let fixture: ComponentFixture<RetrievebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievebookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
