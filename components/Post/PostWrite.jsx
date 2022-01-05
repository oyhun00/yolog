import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../store/modules/post';
import MainLayout from '../Layout';
import PostEditor from './PostEditor';
import styled from '@emotion/styled';
import { Input, Button, Row, Col } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const PostWrite = () => {
  const [title, setTitle] = useState('');
  const onChange = (e) => setTitle(e.target.value);
  const dispatch = useDispatch();
  const submitPost = useCallback((title) => {
    dispatch(addPost(title));
  }, [ dispatch ]);
  const { postTitle } = useSelector(state => state.post); 

  return (
    <MainLayout>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <CustomInput placeholder="제목을 입력하세요" name="title" onChange={onChange} value={title} />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <PostEditor/>
        </Col>
      </Row>
      <Row gutter={[24, 24]} style={{ marginTop: '10px' }}>
        <Col span={24} style={{ textAlign: 'right' }}>
          <CustomButton icon={<CheckOutlined />} size="large" onClick={() => submitPost(title)}>작성완료</CustomButton>
        </Col>
      </Row>
    </MainLayout>
  )
};

const CustomInput = styled(Input)`
  font-size: 40px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #222222;
  padding: 0 0 8px 0;

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

export default PostWrite;