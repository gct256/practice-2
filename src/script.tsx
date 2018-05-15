import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';

import { mainStore } from './main';
import { EntryAdd } from './containers/EnrtryAdd';
import { EntryList } from './containers/EntryList';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={mainStore}>
      <div className="container">
        <section className="section">
          <EntryAdd />
          <EntryList />
        </section>
      </div>
    </Provider>,
    root,
  );
}
