import React from 'react';
import wrapper from 'store/configure';
import App from 'next/app';
import Head from 'next/head';
import 'public/style/yolog.css';
import 'public/font/font.css';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>yolog</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default wrapper.withRedux(MainApp);