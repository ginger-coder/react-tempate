import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { enthusiasm } from '@/reducers';
import { StoreState } from '@/types';

import TsDemo from './containers/tsdemo';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <TsDemo />
    </Provider>,
    document.getElementById('app') as HTMLElement
);
