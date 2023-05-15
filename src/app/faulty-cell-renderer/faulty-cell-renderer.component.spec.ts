import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyCellRendererComponent } from './faulty-cell-renderer.component';

describe('FaultyCellRendererComponent', () => {
  let component: FaultyCellRendererComponent;
  let fixture: ComponentFixture<FaultyCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultyCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaultyCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
