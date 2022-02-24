import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
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
import axios from 'axios';

const PostWrite = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [tag, setTag] = useState('');
  const [post, setPost] = useState({
    title: '',
    content: '',
    thumbnail: '',
    thumbnailText: '',
    tags: [],
  });

  const onChangeTitle = (e) => setPost({ ...post, title: e.target.value });

  const onKeyPress = (e) => {
    if (e.key === 'Enter' && (tag && tag.trim() !== '')) {
      setPost({
        ...post,
        tags: post.tags.concat(tag),
      });

      setTag('');
    }
  };

  const tagDelete = (index) => {
    const filtered = post.tags.filter((v, i) => i !== index);
    setPost({
      ...post,
      tags: filtered,
    });
  };

  const submitPost = useCallback(() => {
    if (!post.title) { return toast.error('제목을 입력해주세요'); }
    if (!post.thumbnailText.trim() || post.thumbnailText.trim() === '') { return toast.error('내용을 입력해주세요'); }
    return dispatch(addPost(post));
  }, [dispatch, post]);

  const tagList = post.tags?.map((v, index) => (
    <Tag key={v} onClick={() => tagDelete(index)}>{v}</Tag>
  ));

  const getUpdatePost = async () => {
    const { id } = router.query;
    const { data } = await axios.get('/api/post', { params: { id } });
    const { title, content, tags } = data;

    setPost({
      ...post,
      title,
      content,
      tags,
    });
  };

  useEffect(() => {
    console.log('useEffect 1 ', post);
    if (router.query) { getUpdatePost(); }
    console.log('useEffect 2 ', post);
  }, []);

  // useEffect(() => {
  //   console.log('useEffect', post);
  // }, [post]);

  return (
    <MainLayout>
      <SizeSet>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <TitleInput placeholder="제목을 입력하세요" name="title" onChange={onChangeTitle} value={post.title} />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <TagInput
              placeholder="태그를 입력하세요"
              name="tag"
              onChange={(e) => setTag(e.target.value)}
              onKeyPress={onKeyPress}
              value={tag}
            />
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <TagArea>{tagList}</TagArea>
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
  width: 70%;
  height: 100%;
  display: flex;
  flex-flow: column;
  
  & > div:nth-child(4) {
    flex: auto;
  }
  
  ${mediaWidth.MEDIA_TABLET} {
    width: 90%;
  }

  ${mediaWidth.MEDIA_MOBILE} {
    width: 100%;
  }
`;

const TitleInput = styled(Input)`
  font-size: 40px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #222222;
  padding: 0 0 8px 0;

  :hover, :active, :focus {
    border-color: #323232;
  }
`;

const TagArea = styled.div`
  display: flex;
`;

const Tag = styled.div`
  background: rgb(24 144 255 / 38%);
  color: #fff;
  border-radius: 10px;
  padding: 2px 16px;
  margin: 6px 6px 12px 0;
  cursor: pointer;
  
  :hover {
    opacity: 0.7;
  }
`;

const TagInput = styled(Input)`
  font-size: 16px;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #222222;
  padding: 0 0 8px 0;
  margin: 12px 0;

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
