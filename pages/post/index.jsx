import React from 'react';
import { END } from 'redux-saga';
import wrapper from '../../store/configure';
import MainLayout from '../../components/Layout';
import PostComponent from '../../components/Post';
import { GET_POST_LIST_REQUEST } from '../../constants/actionTypes'; 

const PostPage = () => {
  return (
    <MainLayout>
      <PostComponent />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res }) => {
  console.log('!@#!@$!@$!$!$',req);
  store.dispatch({ type: GET_POST_LIST_REQUEST });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostPage;
