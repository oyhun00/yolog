import React from 'react';
import withReduxSaga from 'next-redux-saga';
import App from 'next/app';
import Head from 'next/head';
import { ConnectedRouter } from 'connected-next-router';
import { ToastContainer } from 'react-toastify';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import wrapper from '@Store/configure';
import { persistedReducer } from '@Store/reducers';
import '@Public/style/yolog.css';
import '@Public/font/font.css';
import 'quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);

    return (
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>yolog</title>
        </Head>
        <ConnectedRouter>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            closeOnClick
            theme="dark"
          />
        </ConnectedRouter>
      </PersistGate>
    );
  }
}

export default wrapper.withRedux(withReduxSaga(MainApp));
