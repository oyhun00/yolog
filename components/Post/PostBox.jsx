import Router from 'next/router';
import Image from 'next/image';
import * as PropTypes from 'prop-types';
import { Card, Col } from 'antd';
import styled from '@emotion/styled';

import { mediaWidth } from '@Constants/responsive';
import thumbnailImage from '@Assets/thumbnail.png';

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
        cover={<Image alt="example" src={thumbnail || thumbnailImage} priority width="100%" height="100%" layout="responsive" objectFit="cover" />}
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
  font-size: 0.85rem;
  font-weight: 300;
  margin-bottom: 0.4rem;
  
  ${mediaWidth.MEDIA_MOBILE} {
    font-size: 0.9rem;
  }
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
  padding: 0 0.5625rem;
  margin: 2.25rem 0.25rem 0 0;
  cursor: pointer;
  font-size: 0.85rem;
  line-height: 1.125rem;
  display: inline-block;
  
  :hover {
    opacity: 0.7;
  }
  
  ${mediaWidth.MEDIA_MOBILE} {
    padding: 0 0.8rem;
    font-size: 0.8rem;
  }
`;

const CustomCard = styled(Card)`
  background: 0;
  transition: opacity 0.3s;
  
  :hover {
    opacity: 0.7;
  }
  
  :active {
    .ant-card-meta-title, .ant-card-meta-description {
      text-decoration-line: underline;
    }
  }

  .ant-card-cover {
    height: 9.375rem;
    overflow: hidden;
    
    > span {
      height: 100% !important;
    }

    ${mediaWidth.MEDIA_MOBILE} {
      height: 13rem;
    }
  }

  .ant-card-cover img {
    //height: 100%;
    //width: 100%;
  }

  .ant-card-body {
    padding: 1.25rem;
    background: #262626;
  }

  .ant-card-meta-title {
    color: #fff;
    font-size: 1rem;

    ${mediaWidth.MEDIA_MOBILE} {
      font-size: 1.1rem;
    }
  }

  .ant-card-meta-description {
    height: ${(props) => (props.tags ? '4.3rem' : '7.8125rem')};
    margin-bottom: ${(props) => (props.tags ? '0' : '0.625rem')};
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 300;
    color: #a3a3a3;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: ${(props) => (props.tags ? '3' : '6')};
    -webkit-box-orient: vertical;

    ${mediaWidth.MEDIA_TABLET} {
    }

    ${mediaWidth.MEDIA_MOBILE} {
      height: 4.4rem;
      font-size: 0.9rem;
      -webkit-line-clamp: 3;
    }
  }
  
  :hover {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
  }
`;

export default PostBox;
