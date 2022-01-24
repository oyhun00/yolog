import React from 'react';
import { END } from 'redux-saga';
import wrapper from '../../store/configure';
import MainLayout from '../../components/Layout';
import PostComponent from '../../components/Post';

const PostPage = () => {
  return (
    <MainLayout>
      <PostComponent />
    </MainLayout>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async ({ req, res }) => {
  store.dispatch({ type: 'GET_POST_LIST_REQUEST' });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostPage;
