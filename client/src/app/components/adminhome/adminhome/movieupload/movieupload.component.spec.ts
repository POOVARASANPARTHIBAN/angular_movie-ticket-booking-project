import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieuploadComponent } from './movieupload.component';

describe('MovieuploadComponent', () => {
  let component: MovieuploadComponent;
  let fixture: ComponentFixture<MovieuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
