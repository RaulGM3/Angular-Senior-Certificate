import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-child',
  imports: [],
  templateUrl: './model-child.component.html',
  styleUrl: './model-child.component.scss'
})
export class ModelChildComponent {
  childAge = model (0);
  
  change (ev: Event) {
    const e = (ev.target as HTMLInputElement).value
    console.log (e);
    this.childAge.set (parseInt (e));
  }


}
