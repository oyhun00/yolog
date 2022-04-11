import dynamic from 'next/dynamic';

const PostWrite = dynamic(() => import('@Components/Post/PostWrite'));

const Index = () => <PostWrite />;

export default Index;
