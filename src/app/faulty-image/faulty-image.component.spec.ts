import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultyImageComponent } from './faulty-image.component';

describe('FaultyImageComponent', () => {
  let component: FaultyImageComponent;
  let fixture: ComponentFixture<FaultyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultyImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaultyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
