import React from 'react';
import { END } from 'redux-saga';
import wrapper from '../../store/configure';
import MainLayout from '../../components/Layout';
import PostComponent from '../../components/Post';
import { GET_POST_LIST_REQUEST } from '../../constants/actionTypes'; 
import { getPostList } from '../../store/reducers/post';

const PostPage = () => {
  return (
    <MainLayout>
      <PostComponent />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res }) => {
  store.dispatch(getPostList());
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostPage;
