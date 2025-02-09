import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { AuthService } from '../auth.service';
import { StateService } from '../state.service';
import { provideRouter } from '@angular/router';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let authS: AuthService;
  let statS: StateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [ToolbarComponent],  // Asegúrate de que el componente esté en declarations
      providers: [provideRouter([]), AuthService, StateService]  // Los proveedores de servicios
    }).compileComponents();

    // Usa TestBed para crear la instancia del componente
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    authS = TestBed.inject(AuthService);  // Inyección de dependencias
    statS = TestBed.inject(StateService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  fit('needsLogin returns false when the user is not authenticated', () => {
    expect(component?.needsLogin()).toBeTruthy();
  });

  fit('needsLogin returns true when the user is authenticated', () => {
    localStorage.setItem('token', 'asdf');
    expect(component?.needsLogin()).toBeFalsy();
  });
});
