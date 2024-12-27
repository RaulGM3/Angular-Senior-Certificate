import { Component } from '@angular/core';
import { SelectorsComponent } from './selectors/selectors.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';

@Component({
  selector: 'app-advanced-components',
  imports: [SelectorsComponent, ContentProjectionComponent],
  templateUrl: './advanced-components.component.html',
  styleUrl: './advanced-components.component.scss'
})
export class AdvancedComponentsComponent {

}
