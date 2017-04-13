import { div } from '@cycle/dom'
import xs from 'xstream'

function AboutPage () {
  const vtree$ = xs.of(
    div('About')
  );
  return {
    DOM: vtree$
  };
}

export default AboutPage;