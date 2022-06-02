import ReactDOMServer from 'react-dom/server';
import App from './App';

export function render(url: string, context: Record<string, any>) {
  return ReactDOMServer.renderToString(<App />);
}
