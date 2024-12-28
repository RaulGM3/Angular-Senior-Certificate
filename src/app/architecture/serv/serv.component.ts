import { Component, inject, linkedSignal } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serv',
  imports: [CommonModule],
  templateUrl: './serv.component.html',
  styleUrl: './serv.component.scss'
})
export class ServComponent {
  clickedList = linkedSignal (inject(DataService).clickedList);
}
