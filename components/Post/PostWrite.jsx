import React, { useState } from 'react';
import MainLayout from '../Layout';
import PostEditor from './PostEditor';
import styled from '@emotion/styled';
import { Input } from 'antd';

const PostWrite = () => {
  const [desc, setDesc] = useState('');

  return (
    <MainLayout>
      <CustomInput placeholder="제목을 입력하세요" />
      <PostEditor value={desc} onChange={setDesc} />
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

export default PostWrite;