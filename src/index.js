import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import { App } from './app'
import { makeRouterDriver } from 'cyclic-router'
import switchPath from 'switch-path';
import { createHashHistory } from 'history';

const main = App;

const drivers = {
  DOM: makeDOMDriver('#app'),
  router: makeRouterDriver(createHashHistory(), switchPath)
};

run(main, drivers);
