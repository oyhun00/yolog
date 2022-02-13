import React from 'react';
import wrapper from '@Store/configure';
import App from 'next/app';
import Head from 'next/head';
import { ConnectedRouter } from 'connected-next-router';
import '@Public/style/yolog.css';
import '@Public/font/font.css';
import 'quill/dist/quill.snow.css';

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
        </ConnectedRouter>
      </>
    );
  }
}

export default wrapper.withRedux(MainApp);
