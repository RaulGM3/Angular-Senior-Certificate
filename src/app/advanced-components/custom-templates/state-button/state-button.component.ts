import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-state-button',
  imports: [CommonModule],
  templateUrl: './state-button.component.html',
  styleUrl: './state-button.component.scss'
})
export class StateButtonComponent {

  action$ = timer(2000);

  @Input()
  initialTemplate!: TemplateRef<any>;
  @Input()
  workingTemplate!: TemplateRef<any>;
  @Input()
  doneTemplate!: TemplateRef<any>;

  currentTemplate!: TemplateRef<any>;

  ngOnInit() {
    this.currentTemplate = this.initialTemplate;
    console.log (this.currentTemplate)
  }

  triggerAction() {
    this.currentTemplate = this.workingTemplate;
    this.action$.subscribe(() => this.currentTemplate = this.doneTemplate);
  }

  ngOnChanges(changes: any): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

}
