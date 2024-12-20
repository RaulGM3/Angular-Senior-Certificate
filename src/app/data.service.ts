import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    {
      id: 1,
      name: 'Data 1',
      description: 'This is the first data'
    },
    {
      id: 2,
      name: 'Data 2',
      description: 'This is the second data'
    },
    {
      id: 3,
      name: 'Data 3',
      description: 'This is the third'
    }
  ];

  clickedList = signal<number[]>([]);

  constructor() { }

  getData() {
    return this.data;
  }

  addClick (id: number) {
    console.log ('Service receives the value and adds it to the data', id);
    this.clickedList.update (list => [...list, id]);
  }
}
