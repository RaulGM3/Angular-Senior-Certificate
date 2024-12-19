import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateComponentsComponent } from './intermediate-components.component';

describe('IntermediateComponentsComponent', () => {
  let component: IntermediateComponentsComponent;
  let fixture: ComponentFixture<IntermediateComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntermediateComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediateComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
