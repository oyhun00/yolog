import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../store'
import { Provider } from 'react-redux';
import App from 'next/app';
import "../public/style/yolog.css";

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MainApp;