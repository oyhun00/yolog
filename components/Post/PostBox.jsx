import React from 'react';
import Link from 'next/link';
import { Card } from 'antd';
import styled from '@emotion/styled';

const { Meta } = Card;
const PostBox = ({ data }) => {
  const { id, title, titleImage, content } = data;

  return (
    <Link href={`/post/${id}`}>
      <CustomCard
        hoverable
        cover={<img alt="example" src={titleImage ? titleImage : "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"} />}
      >
        <Meta title={title} description={content}></Meta>
      </CustomCard>
    </Link>
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
    color: rgba(0, 0, 0, 0.85);
  }
`;

export default PostBox;