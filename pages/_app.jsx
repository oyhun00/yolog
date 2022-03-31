import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { ConnectedRouter } from 'connected-next-router';
import { ToastContainer } from 'react-toastify';
import 'quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';

import wrapper from '@Store/configure';
import '@Public/style/yolog.css';
import '@Public/font/font.css';

// eslint-disable-next-line react/prop-types
function MainApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'REFRESH_TOKEN_REQUEST' });
  }, []);

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

export default wrapper.withRedux(MainApp);
