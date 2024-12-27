import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSelectorDisplayComponent } from './class-selector-display.component';

describe('ClassSelectorDisplayComponent', () => {
  let component: ClassSelectorDisplayComponent;
  let fixture: ComponentFixture<ClassSelectorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassSelectorDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassSelectorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
