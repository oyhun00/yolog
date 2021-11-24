import React from 'react';
import { Row, Col } from 'antd';
import PostBox from './PostBox';

const PostComponent = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" span={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" span={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" span={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" span={6}>
          <PostBox />
        </Col>
      </Row>
    </>
  )
};

export default PostComponent;