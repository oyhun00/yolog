import React from 'react';
import App from 'next/app';
import "../public/style/yolog.css";

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

export default MainApp;