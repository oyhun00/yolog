import React from 'react';
import { Row, Col } from 'antd';
import PostBox from './PostBox';

const PostComponent = () => {
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <PostBox />
        </Col>
        <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
          <PostBox />
        </Col>
      </Row>
    </>
  )
};

export default PostComponent;