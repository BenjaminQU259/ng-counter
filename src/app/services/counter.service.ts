import { Injectable } from '@angular/core';

import { Counter } from '../models/counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  createNewCounter(counters: Counter[]): void {
    counters.push(new Counter(0));
  }

  sumCounts(counters: Counter[]): number {
    return counters.reduce((previous, current) => previous + current.count, 0);
  }

  resetAllCounters(counters: Counter[]): void {
    counters.map(counter => counter.count = 0);
  }
}
