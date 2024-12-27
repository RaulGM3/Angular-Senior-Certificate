import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signals',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  mySignal = signal ('test')
  numberSignal = signal (0);
  doubleSignal = computed (() => this.numberSignal () * 2);

  // rxjs
  count = signal(0);
  obs = new Subject<number>();
  obsSignal = toSignal(this.obs, { initialValue: 0 });

  
  constructor () {
    // basic effect
    effect(() => {
      console.log(`The current count is: ${this.numberSignal ()}`);
    });

    // rxjs effect trial
    effect(() => {
      console.log('new obsSignal: ', this.obsSignal());
    });

    const counter = setInterval(() => {
      this.count.update(() => this.count() + 1);
      this.obs.next(this.count());
      if (this.count() === 3) clearInterval(counter);
    }, 100);
  }

  onUpdateSignal () {
    this.mySignal.set ('new value');
    this.mySignal.update (x => x + ' updated');
  }

  onIncreaseSignal () {
    this.numberSignal.update (x => x + 1);
  }
}

