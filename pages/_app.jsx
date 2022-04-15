import { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-next-router';
import { ToastContainer } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';

import wrapper from '@Store/configure';
import '@Public/style/yolog.css';
import '@Public/font/font.css';
import ogImage from '@Assets/og-image.png';
import ico16 from '@Assets/favicon/favicon-16x16.ico';
import ico152 from '@Assets/favicon/favicon-152x152.ico';

const MainLayout = dynamic(() => import('@Components/Layout'));

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
        <title>Yolog</title>
        <meta name="keywords" content="JavaScript, JS, React, ReactJS, Web Programming, Web Development, 웹 개발, 리액트, 자바스크립트" />
        <meta name="author" content="Yong Hoon" />
        <meta name="og:site_name" content="Yolog" />
        <meta name="og:title" content="Yolog" />
        <meta
          name="og:description"
          content="웹 개발과 관련된 이야기를 주로 다룹니다."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://" />
        <meta
          property="og:image"
          content={ogImage.src}
        />
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1.0"
        />
        <link rel="shortcut icon" href={ico16.src} />
        <link rel="apple-touch-icon" sizes="152x152" href={ico152.src} />
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
