import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const configure = () => {
  const middlewares = [sagaMiddleware, logger];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, enhancer);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

const wrapper = createWrapper(configure, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;