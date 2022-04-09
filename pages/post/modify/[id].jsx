import dynamic from 'next/dynamic';

const PostModify = dynamic(() => import('@Components/Post/PostWrite'));

const Modify = () => <PostModify />;

export default Modify;
