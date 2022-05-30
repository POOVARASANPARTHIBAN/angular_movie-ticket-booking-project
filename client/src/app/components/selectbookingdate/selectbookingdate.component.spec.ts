import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbookingdateComponent } from './selectbookingdate.component';

describe('SelectbookingdateComponent', () => {
  let component: SelectbookingdateComponent;
  let fixture: ComponentFixture<SelectbookingdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectbookingdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectbookingdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
