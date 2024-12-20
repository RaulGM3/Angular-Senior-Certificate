import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  imports: [],
  templateUrl: './dumb.component.html',
  styleUrl: './dumb.component.scss'
})
export class DumbComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() aclaration!: string;

  constructor () {
  }
}
