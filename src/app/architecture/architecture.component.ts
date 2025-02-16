import { Component, signal } from '@angular/core';

import { SmartComponent } from './smart/smart.component';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { DependencyInjectionComponent } from '../dependency-injection/dependency-injection.component';
import { NgModulesComponent } from '../ng-modules/ng-modules.component';

@Component({
  selector: 'app-architecture',
  imports: [SmartComponent, MatTooltipModule, NgModulesComponent],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent {
  title = 'Arquitecture';
  // description = signal('This is the architecture page');
  
}
