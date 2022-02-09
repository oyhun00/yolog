import React from 'react';
import { END } from 'redux-saga';
import wrapper from '@Store/configure';
import MainLayout from '@Components/Layout';
import Post from '@Components/Post/Post';
import { GET_POST_REQUEST } from '@Constants/actionTypes';

const PostDetail = () => (
  <MainLayout>
    <Post />
  </MainLayout>
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const { id } = params;

  store.dispatch({ type: GET_POST_REQUEST, payload: parseInt(id, 10) });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostDetail;
