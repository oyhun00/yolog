import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from '../../store/configure';
import { END } from 'redux-saga';
import MainLayout from '../../components/Layout';
import PostComponent from '../../components/Post'
import { getPostList } from '../../store/reducers/post';

const PostPage = () => {
  return (
    <MainLayout>
      <PostComponent />
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res }) => {
  await store.dispatch({ type: 'GET_POST_LIST_REQUEST' });
});

export default PostPage;
