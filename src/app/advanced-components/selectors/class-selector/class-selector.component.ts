import { Component } from '@angular/core';
import { ClassSelectorDisplayComponent } from '../class-selector-display/class-selector-display.component';

@Component({
  selector: 'app-class-selector',
  imports: [ClassSelectorDisplayComponent],
  templateUrl: './class-selector.component.html',
  styleUrl: './class-selector.component.scss'
})
export class ClassSelectorComponent {

}
