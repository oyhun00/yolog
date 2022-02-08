import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import PostBox from './PostBox';

const PostComponent = () => {
  const { posts } = useSelector(state => state.post);
  const postCards = posts.map((v) => 
    !v.deleteFl ? (
      <Col key={v.id} className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
        <PostBox key={v.id} data={v} />
      </Col>
    ) : ''
  );

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={24} style={{ textAlign: 'right' }}>
          <CustomButton icon={<PlusOutlined />} size="large">
            <Link href="/write">
              <span>글쓰기</span>
            </Link>
          </CustomButton>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        {postCards}
      </Row>
    </>
  )
};

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