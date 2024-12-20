import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbComponent } from './dumb.component';

describe('DumbComponent', () => {
  let component: DumbComponent;
  let fixture: ComponentFixture<DumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DumbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
