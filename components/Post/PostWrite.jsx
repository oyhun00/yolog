import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '@Store/reducers/post';
import MainLayout from '@Components/Layout';
import PostEditor from '@Components/Post/PostEditor';
import styled from '@emotion/styled';
import {
  Input, Button, Row, Col,
} from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { mediaWidth } from '@Constants/responsive';
import { useQuill } from 'react-quilljs';

const PostWrite = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',
  ];

  const { quill, quillRef } = useQuill({ modules, formats });

  const [content, setContent] = useState({ title: '', desc: '' });
  const onChange = (e) => setContent({ ...content, title: e.target.value });
  const dispatch = useDispatch();
  const submitPost = useCallback(() => {
    setContent((prevContent) => ({ ...prevContent, desc: quill.current.firstChild.innerHTML }));
    console.log('1 ', content);
    dispatch(addPost(content));
  }, [content, dispatch, quill]);

  return (
    <MainLayout>
      <SizeSet>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <CustomInput placeholder="제목을 입력하세요" name="title" onChange={onChange} value={content.title} />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <PostEditor quillRef={quillRef} />
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
