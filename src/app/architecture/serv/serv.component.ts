import { Component, inject, linkedSignal } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-serv',
  imports: [],
  templateUrl: './serv.component.html',
  styleUrl: './serv.component.scss'
})
export class ServComponent {
  clickedList = linkedSignal (inject(DataService).clickedList);
}
