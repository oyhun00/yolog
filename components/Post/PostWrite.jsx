import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import {
  Input, Button, Row, Col,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import { addPost } from '@Store/reducers/post';
import MainLayout from '@Components/Layout';
import PostEditor from '@Components/Post/PostEditor';
import { mediaWidth } from '@Constants/responsive';

const PostWrite = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: '',
    content: '',
    thumbnail: '',
    thumbnailText: '',
  });
  const onChangeTitle = (e) => setPost({ ...post, title: e.target.value });
  const submitPost = useCallback(() => {
    if (!post.title) { return toast.error('제목을 입력해주세요'); }
    if (!post.thumbnailText.trim() || post.thumbnailText.trim() === '') { return toast.error('내용을 입력해주세요'); }
    return dispatch(addPost(post));
  }, [dispatch, post]);

  return (
    <MainLayout>
      <SizeSet>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <CustomInput placeholder="제목을 입력하세요" name="title" onChange={onChangeTitle} value={post.title} />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <PostEditor setPost={setPost} post={post} />
          </Col>
        </Row>
        <Row gutter={[24, 24]} style={{ marginTop: '10px' }}>
          <Col span={24} style={{ textAlign: 'right' }}>
            <CustomButton icon={<CheckOutlined />} size="large" onClick={submitPost}>작성완료</CustomButton>
          </Col>
        </Row>
      </SizeSet>
    </MainLayout>
  );
};

const SizeSet = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  
  & > div:nth-child(2) {
    flex: auto;
  }
  
  ${mediaWidth.MEDIA_TABLET} {
    width: 70%;
  }
`;

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
