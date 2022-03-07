import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@Store/reducers';
import rootSaga from '@Store/sagas';
import { createRouterMiddleware, initialRouterState } from 'connected-next-router';
import Router from 'next/router';

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
  const store = createStore(rootReducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(configure, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
