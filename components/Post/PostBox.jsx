import React from 'react';
import Router from 'next/router';
import * as PropTypes from 'prop-types';
import { Card, Col } from 'antd';
import styled from '@emotion/styled';

const { Meta } = Card;
const PostBox = ({ data, onSearchByTag }) => {
  const {
    id, title, thumbnail, thumbnailText, crtDttm, udtDttm, tags,
  } = data;
  const tagList = tags?.map((v) => (<Tag key={v} onClick={(e) => onSearchByTag(v, e)}>{v}</Tag>));

  return (
    <Col onClick={() => Router.push(`/post/${id}`)} className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={8}>
      <CustomCard
        hoverable
        bordered={false}
        tags={tags.length !== 0 ? 1 : 0}
        cover={<img alt="example" src={thumbnail || 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg'} />}
      >
        <Date>{crtDttm || udtDttm}</Date>
        <Meta title={title} description={thumbnailText} />
        <TagArea>{tagList}</TagArea>
      </CustomCard>
    </Col>
  );
};

PostBox.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    thumbnailText: PropTypes.string,
    crtDttm: PropTypes.string,
    udtDttm: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSearchByTag: PropTypes.func.isRequired,
};

const Date = styled.div`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 0.4rem;
`;

const TagArea = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Tag = styled.div`
  background: rgb(24 144 255 / 38%);
  color: #fff;
  border-radius: 10px;
  padding: 0px 9px;
  margin: 36px 4px 0 0;
  cursor: pointer;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  
  :hover {
    opacity: 0.7;
  }
`;

const CustomCard = styled(Card)`
  border: 1px solid #1e1e1e;
  
  &.ant-card-bordered {
    //border: 1px solid black;
  }

  .ant-card-cover {
    height: 150px;
    overflow: hidden;
  }

  .ant-card-cover img {
    //height: 100%;
    //width: 100%;
  }

  .ant-card-body {
    padding: 20px;
    background: #1e1e1e;
  }

  .ant-card-meta-title {
    color: #fff;
  }

  .ant-card-meta-description {
    height: ${(props) => (props.tags ? '80px' : '125px')};
    margin-bottom: ${(props) => (props.tags ? '0' : '10px')};
    overflow: hidden;
    font-size: 13px;
    font-weight: 300;
    color: #fff;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.tags ? '4' : '6')};
    -webkit-box-orient: vertical;
  }
  
  :hover {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
  }
`;

export default PostBox;
