import React from 'react';
import ReactDOM from 'react-dom';
import './sass/app.sass';
import AppSearcher from './components/AppSearcher';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h1>React Posts Searcher</h1>
    </header>
    <main className="container">
      <AppSearcher />
    </main>
    <footer>
      <p>Stan Fortoński 2020</p>
    </footer>
  </React.StrictMode>,
  document.getElementById('app')
);
