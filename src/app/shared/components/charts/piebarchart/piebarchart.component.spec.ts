import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiebarchartComponent } from './piebarchart.component';

describe('PiebarchartComponent', () => {
  let component: PiebarchartComponent;
  let fixture: ComponentFixture<PiebarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiebarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiebarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
