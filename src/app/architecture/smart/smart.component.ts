import { Component, inject } from '@angular/core';
import { DumbComponent } from '../dumb/dumb.component';
import { Dumb2Component } from '../dumb2/dumb2.component';
import { DataService } from '../../data.service';
import { ServComponent } from '../serv/serv.component';

@Component({
  selector: 'app-smart',
  imports: [DumbComponent, Dumb2Component, ServComponent],
  templateUrl: './smart.component.html',
  styleUrl: './smart.component.scss'
})
export class SmartComponent {
  data = inject (DataService). getData();

  constructor (
    private dataService: DataService
  ) {
  }
  onLogItemPressed (id: number) {
    console.log ('Smart components gets the value and passes it to the service', id);
    this.dataService.addClick (id);
  }
}

