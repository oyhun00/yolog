import dynamic from 'next/dynamic';

const Login = dynamic(() => import('@Components/Auth'));

const LoginPage = () => <Login />;

export default LoginPage;
