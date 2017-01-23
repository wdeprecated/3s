import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)
const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, root);
