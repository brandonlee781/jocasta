/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { InitialState, DispatchAction, rootReducer } from './root-reducer';

export const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);