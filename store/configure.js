import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { persistedReducer } from '@Store/reducers';
import rootSaga from '@Store/sagas';
import { createRouterMiddleware, initialRouterState } from 'connected-next-router';
import Router from 'next/router';
import { persistStore } from 'redux-persist';

const makeCofiguredStore = (reducer, initialState, enhancer, sagaMiddleware) => {
  const createdStore = createStore(reducer, initialState, enhancer);
  createdStore.sagaTask = sagaMiddleware.run(rootSaga);
  return createdStore;
};
const configure = (context) => {
  const routerMiddleware = createRouterMiddleware();
  const { asPath } = context.ctx || Router.router || {};

  let initialState;
  if (asPath) {
    initialState = {
      router: initialRouterState(asPath),
    };
  }

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger, routerMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
  // const store = createStore(rootReducer, initialState, enhancer);
  let store;

  if (typeof window === 'undefined') {
    store = makeCofiguredStore(rootReducer, initialState, enhancer, sagaMiddleware);
    // store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
  }

  store = makeCofiguredStore(persistedReducer, initialState, enhancer, sagaMiddleware);
  // store.sagaTask = sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { persistor, ...store };
};

const wrapper = createWrapper(configure, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
