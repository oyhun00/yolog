import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import {
  Row, Col, Button, Input,
} from 'antd';
import {
  PlusOutlined, SearchOutlined, RightOutlined, LeftOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';

import PostBox from '@Components/Post/PostBox';
import { mediaWidth, breakPoint } from '@Constants/responsive';

const PostComponent = () => {
  const { post, auth } = useSelector((state) => state);
  const { posts } = post;
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

  const postCards = posts.map((v) => (!v.deleteFl ? (
    <Col key={v.id} className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
        <PostBox key={v.id} data={v} onSearchByTag={onSearchByTag} />
    </Col>
  ) : ''));

  const postRef = useRef();
  const [scrollPos, setScrollPos] = useState(0);

  const onChangeScroll = (direction) => {
    const browserWidth = document.body.clientWidth;
    const { scrollWidth, clientWidth } = postRef.current;

    // const distance = browserWidthbreakPoint.POINT_MOBILE

    if (direction === 'left') {
      postRef.current.scrollLeft -= 600;
    } else {
      postRef.current.scrollLeft += 600;
    }
    setScrollPos(postRef.current.scrollLeft);
    console.log('scrollLeft', postRef.current.scrollLeft);
    console.log('scrollWidth', scrollWidth);
  };

  console.log('rendering', document.body.clientWidth);
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
      {/*<Row gutter={[24, 24]}>*/}
      {/*  <SearchArea>*/}
      {/*    <SearchIcon style={{ fontSize: '32px' }} />*/}
      {/*    <CustomInput />*/}
      {/*  </SearchArea>*/}
      {/*</Row>*/}
      <Row gutter={[24, 24]}>
        <Category>코로나19</Category>
      </Row>
      <PostRow gutter={[24, 24]} scroll={scrollPos}>
        <PostList ref={postRef}>
          {postCards}
        </PostList>
        {
          scrollPos !== 0 ? (<LeftIcon style={{ fontSize: '2rem' }} onClick={() => onChangeScroll('left')} />) : ''
        }
        <RightIcon style={{ fontSize: '2rem' }} onClick={() => onChangeScroll('right')} />
      </PostRow>
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

  :before, :after {
    position: absolute;
    content: '';
    height: 100%;
    width: 4rem;
  }
  
  :before {
    left: 0;
    background: linear-gradient(90deg, #000000cf, transparent);
    display: ${({ scroll }) => (scroll !== 0 ? 'block' : 'none')};
    z-index: 10;
  }
  
  :after {
    right: 0;
    background: linear-gradient(270deg, #000000cf, transparent);
    //display: ${(props) => (props.scrollPos !== 0 ? 'block' : 'none')};
  }
`;

const PostList = styled.div`
  display: flex;
  flex-flow: nowrap;
  overflow: auto;
  scroll-behavior: smooth;
`;

const LeftIcon = styled(LeftOutlined)`
  font-size: 2rem;
  position: absolute;
  left: 1.5rem;
  top: calc(50% - 2rem);
  cursor: pointer;
  z-index: 10;
  
  :hover {
    opacity: 0.7;
  }
`;

const RightIcon = styled(RightOutlined)`
  font-size: 2rem;
  position: absolute;
  right: 1.5rem;
  top: calc(50% - 2rem);
  cursor: pointer;
  z-index: 10;
  
  :hover {
    opacity: 0.7;
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

const SearchArea = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 4rem auto;
  border-bottom: 1px solid #fff;
`;

const SearchIcon = styled(SearchOutlined)`
`;

const CustomInput = styled(Input)`
  background: transparent;
  border: 0;
  font-size: 2rem;
  //font-weight: 300;
  margin-left: 0.3rem;
`;

const Category = styled.div`
  margin-bottom: 0.7rem;
  padding: 0 0.75rem;
  font-size: 2rem;
  font-weight: 400;
  text-shadow: 0 0 14px #ffffffe0;
`;

export default PostComponent;
