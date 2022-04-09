import { END } from 'redux-saga';
import dynamic from 'next/dynamic';

import wrapper from '@Store/configure';
import { GET_POST_REQUEST } from '@Constants/actionTypes';

const Post = dynamic(() => import('@Components/Post/Post'));

const PostDetail = () => <Post />;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  const { id } = params;

  store.dispatch({ type: GET_POST_REQUEST, payload: parseInt(id, 10) });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostDetail;
