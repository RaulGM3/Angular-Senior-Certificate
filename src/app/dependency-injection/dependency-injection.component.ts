import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModulesComponent } from '../ng-modules/ng-modules.component';

@Component({
  selector: 'app-dependency-injection',
  imports: [MatTooltipModule, NgModulesComponent],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss'
})
export class DependencyInjectionComponent {

}
