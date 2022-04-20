import { END } from 'redux-saga';
import dynamic from 'next/dynamic';
import axios from 'axios';

import wrapper from '@Store/configure';
import { GET_POST_REQUEST } from '@Constants/actionTypes';

const Post = dynamic(() => import('@Components/Post/Post'));

const PostDetail = () => <Post />;

export async function getStaticPaths() {
  const { data } = await axios.get(`${process.env.APP_BASE_URL}/api/post/ids`);
  const paths = data.map((v) => ({
    params: { id: v.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = wrapper.getStaticProps((store) => async ({ params }) => {
  const { id } = params;

  store.dispatch({ type: GET_POST_REQUEST, payload: parseInt(id, 10) });
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default PostDetail;
