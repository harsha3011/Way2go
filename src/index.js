import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app.js';
import configureStore from './redux/store/configureStore';

import './css/mui.min.css';
import './css/style.scss';

const store = configureStore();
injectTapEventPlugin();

render(
    <Provider store={store}>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
