import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveImageComponent } from './approve-image.component';

describe('ApproveImageComponent', () => {
  let component: ApproveImageComponent;
  let fixture: ComponentFixture<ApproveImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
