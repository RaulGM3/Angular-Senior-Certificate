import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dumb2Component } from './dumb2.component';

describe('Dumb2Component', () => {
  let component: Dumb2Component;
  let fixture: ComponentFixture<Dumb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dumb2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dumb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
