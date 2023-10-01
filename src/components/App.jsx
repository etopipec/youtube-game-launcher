import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { Main } from './Main.jsx';

function render() {
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  root.render(<Main />);
}

render();