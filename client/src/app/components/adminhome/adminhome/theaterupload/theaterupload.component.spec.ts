import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheateruploadComponent } from './theaterupload.component';

describe('TheateruploadComponent', () => {
  let component: TheateruploadComponent;
  let fixture: ComponentFixture<TheateruploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheateruploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheateruploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
