import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApieComponent } from './apie.component';

describe('ApieComponent', () => {
  let component: ApieComponent;
  let fixture: ComponentFixture<ApieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
