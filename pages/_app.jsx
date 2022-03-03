import React from 'react';
import withReduxSaga from 'next-redux-saga';
import App from 'next/app';
import Head from 'next/head';
import { ConnectedRouter } from 'connected-next-router';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import wrapper from '@Store/configure';
import '@Public/style/yolog.css';
import '@Public/font/font.css';
import 'quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
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
      </>
    );
  }
}

export default wrapper.withRedux(withReduxSaga(MainApp));
