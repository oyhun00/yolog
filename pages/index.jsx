import React from 'react';
import { END } from 'redux-saga';
import dynamic from 'next/dynamic';

import wrapper from '@Store/configure';
import { GET_POST_LIST_REQUEST } from '@Constants/actionTypes';

const PostComponent = dynamic(() => import('@Components/Post'));
const PostPage = () => (
  <PostComponent />
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ query }) => {
  const { tag, page } = query;

  store.dispatch({
    type: GET_POST_LIST_REQUEST,
    payload: {
      tag,
      page,
    },
  });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostPage;
