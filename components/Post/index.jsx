import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {
  Row, Col, Button, Pagination,
} from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import PostBox from '@Components/Post/PostBox';
import { mediaWidth } from '@Constants/responsive';

const PostComponent = () => {
  const router = useRouter();
  const { post, auth } = useSelector((state) => state);
  const { posts, tags, postsCount } = post;
  const { user } = auth;

  console.log(postsCount);

  const onSearchByTag = (tag, e) => {
    Router.push({
      pathname: '/',
      query: {
        tag,
      },
    });

    e.stopPropagation();
  };

  const postSection = !router.query.tag ? tags.reduce((acc, cur) => {
    const category = <Category>{cur.mostTags}</Category>;
    const postCards = posts.map((v) => (v.tags.includes(cur.mostTags) ? (
      <PostBox key={v.id} data={v} onSearchByTag={onSearchByTag} />
    ) : ''));
    const filteredCards = postCards.filter((i) => i.length !== 0).slice(0, 5);
    const viewMoreBox = (
      <Col className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8} onClick={(e) => onSearchByTag(cur.mostTags, e)}>
        <ViewMoreBox>
          <EllipsisOutlined style={{ fontSize: '3rem' }} />
          <div>&quot;{cur.mostTags}&quot; 관련 포스트 더보기</div>
        </ViewMoreBox>
      </Col>
    );
    const postRow = <PostRow gutter={[24, 24]}>{filteredCards}{cur.tagCount >= 5 ? viewMoreBox : ''}</PostRow>;
    acc.push(category, postRow);
    return acc;
  }, []) : (
    posts.map((v) => (<PostBox key={v.id} data={v} onSearchByTag={onSearchByTag} />))
  );

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>Prev</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const onChangePage = (page) => {
    Router.push({
      pathname: '/',
      query: {
        tag: router.query.tag,
        page,
      },
    });
  };

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
      { router.query.tag ? (<Category>{router.query.tag}</Category>) : '' }
      {/*<Row gutter={[24, 24]}>*/}
        { postSection }
      {/*</Row>*/}
      {
        router.query.tag ? (
          <CustomPagination
            size="small"
            total={postsCount}
            defaultPageSize={9}
            itemRender={itemRender}
            onChange={onChangePage}
          />
        ) : ''
      }
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
  margin: 3rem 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 400;
  text-shadow: 0 0 14px #ffffffe0;
  
  & :first-child {
    margin: 0 0 0.5rem 0;
  }
`;

const ViewMoreBox = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #2c2c2c, #1e1e1e);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  & > div {
    margin-top: 0.4rem;
  }
  
  :hover {
    background: linear-gradient(135deg, #222222, #1a1a1a);
  }
`;

const CustomPagination = styled(Pagination)`
  margin: 2rem auto 0 auto;
  padding-bottom: 3rem;
  text-align: center;

  .ant-pagination-item {
    margin: 0 0.3rem;
  }

  .ant-pagination-item-active {
    background: #234a74 !important;
    border-radius: 50%;
    border: 0;
  }

  .ant-pagination-item a, .ant-pagination-item-link {
    color: #fff !important;
    font-size: 1rem;
    font-weight: 300;
  }
  
  .ant-pagination-next > a, .ant-pagination-prev > a {
    color: #fff;
    font-size: 0.8rem;
    margin: 0 0.5rem;
  }
  
  .ant-pagination-disabled > a {
    color: #505050;
  }
`;

export default PostComponent;
