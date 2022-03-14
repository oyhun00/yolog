import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import {
  Row, Col, Button,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import PostBox from '@Components/Post/PostBox';
import { mediaWidth } from '@Constants/responsive';

const PostComponent = () => {
  const { post, auth } = useSelector((state) => state);
  const { posts, tags } = post;
  const { user } = auth;

  const onSearchByTag = (tag, e) => {
    Router.push({
      pathname: '/',
      query: {
        tag,
      },
    });

    e.stopPropagation();
  };

  const viewMoreBox = (
    <div>
      더보기
    </div>
  );

  const postSection = tags.reduce((acc, cur) => {
    const category = <Category>{cur.mostTags}</Category>;
    const postCards = posts.map((v) => (v.tags.includes(cur.mostTags) ? (
      <Col key={v.id} className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
        <PostBox key={v.id + cur.mostTags} data={v} onSearchByTag={onSearchByTag} />
      </Col>
    ) : ''));
    const postRow = <PostRow gutter={[24, 24]}>{postCards}</PostRow>;
    acc.push(category, postRow);
    return acc;
  }, []);

  return (
    <PostListWrap>
      <Row gutter={[24, 24]}>
        {
          user.auth === 'ADMIN' ? (
            <Col span={24} style={{ textAlign: 'right' }}>
              <CustomButton icon={<PlusOutlined />} size="large">
                <Link href="/post/write">
                  <span>글쓰기</span>
                </Link>
              </CustomButton>
            </Col>
          ) : ''
        }
      </Row>
      <Row gutter={[24, 24]}>
        {postSection}
      </Row>
    </PostListWrap>
  );
};

const PostListWrap = styled.div`
  width: 75%;
  margin: 0 auto;

  ${mediaWidth.MEDIA_DESKTOP} {
    width: 100%;
  }
`;

const PostRow = styled(Row)`
  position: relative;
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

const Category = styled.div`
  margin: 1rem 0 -0.5rem 0;
  font-size: 2rem;
  font-weight: 400;
  text-shadow: 0 0 14px #ffffffe0;
`;

export default PostComponent;
