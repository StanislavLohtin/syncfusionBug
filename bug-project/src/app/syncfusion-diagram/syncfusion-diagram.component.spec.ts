import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionDiagramComponent } from './syncfusion-diagram.component';

describe('SyncfusionDiagramComponent', () => {
  let component: SyncfusionDiagramComponent;
  let fixture: ComponentFixture<SyncfusionDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncfusionDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncfusionDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
