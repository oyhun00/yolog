import React from 'react';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import wrapper from '../../store/configure';
import MainLayout from '../../components/Layout';
import Post from '../../components/Post/Post';
import { GET_POST_REQUEST } from '../../constants/actionTypes'; 

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log('id', id);

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
  console.log('getstate 1', store.params);
  store.dispatch({ type: GET_POST_REQUEST, payload: 1 });
  store.dispatch(END);
  console.log('getstate 2', store.getState());

  await store.sagaTask.toPromise();
});

export default PostDetail;