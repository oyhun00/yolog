import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import {
  Input, Button, Row, Col,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { login } from '@Store/reducers/auth';

const Login = () => {
  const dispatch = useDispatch();
  const [authInfo, setAuthInfo] = useState({ id: '', password: '' });

  const onChange = (e) => {
    setAuthInfo({
      ...authInfo,
      [e.target.name]: e.target.value,
    });
  };

  const authSubmit = useCallback(() => {
    dispatch(login(authInfo));
  }, [authInfo, dispatch]);

  return (
    <LoginWrap>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <LoginInput placeholder="ID" name="id" onChange={onChange} />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <LoginInput placeholder="PASSWORD" name="password" onChange={onChange} />
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ marginTop: '10px' }}>
        <Col span={24} style={{ textAlign: 'right' }}>
          <CustomButton icon={<CheckOutlined />} size="large" onClick={authSubmit}>Login</CustomButton>
        </Col>
      </Row>
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  width: 60%;
  height: 600px;
  background: #1e1e1e;
  margin: 0 auto;
  padding: 60px;
`;

const LoginInput = styled(Input)`
  font-size: 24px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #383838;
  padding: 0 0 8px 0;
  margin-bottom: 20px;

  :hover, :active, :focus {
    border-color: #323232;
  }
`;

const CustomButton = styled(Button)`
  background: transparent;
  border: transparent;
  border-radius: 30px;

  & a {
    color: #fff;
  }

  :hover, :focus, :active {
    background: #fff;
    color: #030303;
  }
`;

export default Login;
