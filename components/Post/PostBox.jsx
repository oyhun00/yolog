import React from 'react';
import { Card } from 'antd';
import styled from '@emotion/styled';

const { Meta } = Card;
const PostBox = () => {
  return (
    <CustomCard
      hoverable
      cover={<img alt="example" src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" />}
    >
      <Meta title="포스트 박스 테스트!!!!!!" description="s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It "></Meta>
    </CustomCard>
  )
};

const CustomCard = styled(Card)`
  &.ant-card-bordered {
    border: 1px solid black;
  }

  .ant-card-cover {
    height: 130px;
    overflow: hidden;
  }

  .ant-card-body {
    padding: 20px;
  }

  .ant-card-meta-description {
    height: 90px;
    overflow: hidden;
    font-size: 12px;
  }
`;

export default PostBox;