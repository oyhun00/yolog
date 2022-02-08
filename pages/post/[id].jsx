import React from 'react';
import { END } from 'redux-saga';
import wrapper from 'store/configure';
import MainLayout from 'components/Layout';
import Post from 'components/Post/Post';
import { GET_POST_REQUEST } from 'constants/actionTypes'; 

const PostDetail = () => {
  return (
    <MainLayout>
      <Post />
    </MainLayout>
  )
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  const { id } = params;

  store.dispatch({ type: GET_POST_REQUEST, payload: parseInt(id) });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostDetail;