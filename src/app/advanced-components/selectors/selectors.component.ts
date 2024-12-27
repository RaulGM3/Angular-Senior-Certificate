import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { ClassSelectorDisplayComponent } from './class-selector-display/class-selector-display.component';

@Component({
  selector: 'app-selectors',
  imports: [MatTooltipModule, ClassSelectorDisplayComponent],
  templateUrl: './selectors.component.html',
  styleUrl: './selectors.component.scss'
})
export class SelectorsComponent {

}
