import Layout from './pages';

export function App (sources) {
  const layout = Layout(sources);
  return {
    DOM: layout.DOM,
    router: layout.router
  };
}
