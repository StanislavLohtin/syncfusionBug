import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLeakComponent } from './no-leak.component';

describe('NoLeakComponent', () => {
  let component: NoLeakComponent;
  let fixture: ComponentFixture<NoLeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLeakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
