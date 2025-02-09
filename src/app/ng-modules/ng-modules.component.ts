import { Component, signal } from '@angular/core';
import { DefaultPipe } from '../default.pipe';


@Component({
  selector: 'app-ng-modules',
  imports: [DefaultPipe],
  templateUrl: './ng-modules.component.html',
  styleUrl: './ng-modules.component.scss'
})
export class NgModulesComponent {
  title = signal ('ngModules')
}
