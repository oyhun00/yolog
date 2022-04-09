import { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-next-router';
import { ToastContainer } from 'react-toastify';
import 'quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';

import MainLayout from '@Components/Layout';
import wrapper from '@Store/configure';
import '@Public/style/yolog.css';
import '@Public/font/font.css';

// eslint-disable-next-line react/prop-types
const MainApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { isLogin } = auth;

  useEffect(() => {
    dispatch({ type: 'REFRESH_TOKEN_REQUEST' });
  }, [dispatch, isLogin]);

  return (
    <>
      <Head>
        <title>yolog</title>
      </Head>
      <ConnectedRouter>
        <MainLayout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </MainLayout>
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
};

export default wrapper.withRedux(MainApp);
