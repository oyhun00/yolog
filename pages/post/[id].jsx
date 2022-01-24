import React from 'react';
import { useRouter } from 'next/router'
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
  const router = useRouter();
  const { id } = router.query;

  return {
    paths: [
      { params: id }
    ],
    fallback: true,
  }
};

export const getStaticProps = wrapper.getStaticProps(store => async ({ req, res }) => {
  store.dispatch({ type: 'GET_POST_REQUEST' });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostDetail;