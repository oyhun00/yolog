import React from 'react';
import Router from 'next/router';
import * as PropTypes from 'prop-types';
import { Card } from 'antd';
import styled from '@emotion/styled';

const { Meta } = Card;
const PostBox = ({ data }) => {
  const {
    id, title, thumbnail, thumbnailText,
  } = data;

  return (
    <div onClick={() => Router.push(`/post/${id}`)}>
      <CustomCard
        hoverable
        bordered={false}
        cover={<img alt="example" src={thumbnail || 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg'} />}
      >
        <Meta title={title} description={thumbnailText} />
      </CustomCard>
    </div>
  );
};

PostBox.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    thumbnailText: PropTypes.string,
  }).isRequired,
};

const CustomCard = styled(Card)`
  &.ant-card-bordered {
    //border: 1px solid black;
  }

  .ant-card-cover {
    height: 150px;
    overflow: hidden;
  }

  .ant-card-body {
    padding: 20px;
    background: #1e1e1e;
  }

  .ant-card-meta-title {
    color: #fff;
  }

  .ant-card-meta-description {
    height: 80px;
    overflow: hidden;
    font-size: 13px;
    font-weight: 300;
    color: #fff;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;

export default PostBox;
