import React from 'react';
import { END } from 'redux-saga';
import wrapper from '../../store/configure';
import MainLayout from '../../components/Layout';
import Post from '../../components/Post/Post';

const PostDetail = () => {
  return (
    <MainLayout>
      <Post />
    </MainLayout>
  )
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: '1' } }
    ],
    fallback: true,
  }
};

export const getStaticProps = wrapper.getStaticProps(store => async ({ req, res }) => {
  store.dispatch({ type: 'GET_POST_REQUEST', payload: 1 });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostDetail;