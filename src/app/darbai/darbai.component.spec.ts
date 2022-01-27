import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarbaiComponent } from './darbai.component';

describe('DarbaiComponent', () => {
  let component: DarbaiComponent;
  let fixture: ComponentFixture<DarbaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarbaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
