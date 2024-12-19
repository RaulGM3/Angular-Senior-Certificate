import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-architecture',
  imports: [],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent {
  title = 'Arquitecture';
  description = signal('This is the architecture page');
  
}
