import React from 'react';
import { END } from 'redux-saga';
import wrapper from '@Store/configure';
import MainLayout from '@Components/Layout';
import PostComponent from '@Components/Post';
import { GET_POST_LIST_REQUEST, REFRESH_TOKEN_REQUEST } from '@Constants/actionTypes';

const PostPage = () => (
  <MainLayout>
    <PostComponent />
  </MainLayout>
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query, req }) => {
  const { tag, page } = query;

  store.dispatch({
    type: GET_POST_LIST_REQUEST,
    payload: {
      tag,
      page,
    },
  });
  // store.dispatch({
  //   type: REFRESH_TOKEN_REQUEST,
  //   payload: req.cookies.refreshToken,
  // });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostPage;
