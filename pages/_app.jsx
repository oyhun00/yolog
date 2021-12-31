import React from 'react';
import withRedux from 'next-redux-wrapper';
import wrapper from '../store/configure';
import App from 'next/app';
import "../public/style/yolog.css";
import '../static/font/font.css';

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    )
  }
}

export default wrapper.withRedux(MainApp);