import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, linkedSignal, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { StateService } from '../state.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModelChildComponent } from './model-child/model-child.component';

@Component({
  selector: 'app-signals',
  imports: [CommonModule, MatButtonModule, MatTooltipModule, ModelChildComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  mySignal = signal ('test')
  numberSignal = signal (0);
  doubleSignal = computed (() => this.numberSignal () * 2);
  // title = signal (inject(StateService).title ());
  title = linkedSignal (inject(StateService).title);

  // rxjs
  count = signal(0);
  obs = new Subject<number>();
  obsSignal = toSignal(this.obs, { initialValue: 0 });

  
  constructor (private stateServ: StateService) {
    // basic effect
    effect(() => {
      console.log(`The current count is: ${this.numberSignal ()} and the title is: ${untracked (this.title)}`);
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

  changeTitle () {
    this.title.set ('New Title');
  }

  changeTitleInService () {
    this.stateServ.onUpdateTitle ('Observable Changed Title');
  }
}

