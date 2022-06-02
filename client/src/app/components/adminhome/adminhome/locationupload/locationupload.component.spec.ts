import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationuploadComponent } from './locationupload.component';

describe('LocationuploadComponent', () => {
  let component: LocationuploadComponent;
  let fixture: ComponentFixture<LocationuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
