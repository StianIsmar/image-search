import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import App from './App'

import { composeWithDevTools } from "redux-devtools-extension";


// sage stuff
import createSagaMiddleWare from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import {watchApiRequest} from './sagas/sagas'


const sagaMiddleWare = createSagaMiddleWare()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(watchApiRequest);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)