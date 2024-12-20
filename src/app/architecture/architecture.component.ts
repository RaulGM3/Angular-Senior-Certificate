import { Component, signal } from '@angular/core';

import { SmartComponent } from './smart/smart.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-architecture',
  imports: [SmartComponent, MatTooltipModule],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent {
  title = 'Arquitecture';
  // description = signal('This is the architecture page');
  
}
