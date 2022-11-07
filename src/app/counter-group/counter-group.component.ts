import { Component, OnInit } from '@angular/core';

import { Counter } from '../models/counter.model';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.scss']
})
export class CounterGroupComponent implements OnInit {
  counters: Counter[] = [];

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }

  doCreateCounter(): void {
    this.counterService.createNewCounter(this.counters);
  }

  sumCounts(): number {
    return this.counterService.sumCounts(this.counters);
  }

  doResetAll(): void {
    this.counterService.resetAllCounters(this.counters);
  }
}
