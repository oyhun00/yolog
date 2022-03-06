import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import PostBox from '@Components/Post/PostBox';
import { mediaWidth } from '@Constants/responsive';

const PostComponent = () => {
  const { post, auth } = useSelector((state) => state);
  const { posts } = post;
  const { user } = auth;
  const postCards = posts.map((v) => (!v.deleteFl ? (
    <Col key={v.id} className="gutter-row" xs={24} sm={24} md={12} lg={8} xl={8}>
      <PostBox key={v.id} data={v} />
    </Col>
  ) : ''));
  console.log(user);

  return (
    <PostListWrap>
      <Row gutter={[24, 24]}>
        <Col span={24} style={{ textAlign: 'right' }}>
          <CustomButton icon={<PlusOutlined />} size="large">
            <Link href="/post/write">
              <span>글쓰기</span>
            </Link>
          </CustomButton>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        {postCards}
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

export default PostComponent;
