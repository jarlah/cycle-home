import {div, button} from '@cycle/dom'
import xs from 'xstream'
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function Layout (sources) {
  const match$ = sources.router.define({
    '/': HomePage,
    '/about': AboutPage
  });

  const page$ = match$.map(({path, value}) => {
    return value(Object.assign({}, sources, {
      router: sources.router.path(path)
    }));
  });

  const homePageClick$ = sources.DOM.select(".home").events("click");
  const aboutPageClick$ = sources.DOM.select(".about").events("click");

  return {
    DOM: page$.map(p => p.DOM).flatten().map(page =>
      div([
        button('.home', 'Home'),
        button('.about', 'About'),
        page
      ])
    ),
    router: xs.merge(
      homePageClick$.mapTo('/'),
      aboutPageClick$.mapTo('/about')
    )
  };
}

export default Layout;