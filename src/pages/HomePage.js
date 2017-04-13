import { div } from '@cycle/dom'
import xs from 'xstream'

function HomePage () {
  const vtree$ = xs.of(
    div('Welcome')
  );
  return {
    DOM: vtree$
  };
}

export default HomePage;