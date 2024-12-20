import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dumb2',
  imports: [MatButtonModule],
  templateUrl: './dumb2.component.html',
  styleUrls: ['../dumb2/dumb2.component.scss', '../dumb/dumb.component.scss']
})
export class Dumb2Component {
  @Input() item!: {id: number, name: string, description: string};
  @Output() onButtonClicked = new EventEmitter<number>();

  onClick (id: number) {
    console.log ('You clicked on item on the child component', id);
    this.onButtonClicked.emit (id);
  }
}
