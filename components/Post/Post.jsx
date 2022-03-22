import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Divider } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

import { mediaWidth } from '@Constants/responsive';
import { deletePost } from '@Store/reducers/post';
import Router from 'next/router';

const { Title, Paragraph } = Typography;
const Post = () => {
  const dispatch = useDispatch();
  const postDelete = useCallback((id) => {
    dispatch(deletePost(id));
  }, [dispatch]);
  const { post, auth } = useSelector((state) => state);
  const { postDetail } = post;
  const { user } = auth;
  const {
    id, title, content, crtDttm, udtDttm, tags,
  } = postDetail;

  const onSearchByTag = (tag) => {
    Router.push({
      pathname: '/',
      query: {
        tag,
      },
    });
  };

  const tagList = tags?.map((v) => (<Tag key={v} onClick={() => onSearchByTag(v)}>{v}</Tag>));

  return (
    <CustomTypography>
      {
        // user.auth === 'ADMIN' ? (
          <AdminArea offsetTop={120}>
            <Icon onClick={() => postDelete(id)}>
              <DeleteOutlined style={{ fontSize: '22px' }} />
            </Icon>
            <Icon onClick={() => Router.push(`/post/modify/${id}`)}>
              <FormOutlined style={{ fontSize: '22px' }} />
            </Icon>
          </AdminArea>
        // ) : ''
      }
      <CustomTitle>{title}</CustomTitle>
      <PostInfo>
        <PostDate>{udtDttm || crtDttm}</PostDate>
      </PostInfo>
      <TagArea>{tagList}</TagArea>
      <Divider />
      <CustomParagraph>
        {parse(content)}
      </CustomParagraph>
    </CustomTypography>
  );
};

const AdminArea = styled.div`
  position: absolute;
  right: -70px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: rgb(255 255 255 / 15%);
  border: 2px solid rgb(255 255 255 / 61%);
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

const CustomTypography = styled(Typography)`
  width: 50%;
  margin: 0 auto;
  position: relative;

  ${mediaWidth.MEDIA_TABLET} {
    width: 70%;
  }

  ${mediaWidth.MEDIA_MOBILE} {
    width: 100%;
  }
`;

const CustomTitle = styled(Title)`
  color: #fff !important;
  margin: 0 0 0.3rem 0 !important;
`;

const PostInfo = styled.div`
  display: flex;
`;

const PostDate = styled.div`
  margin-top: 0.2rem;
  font-size: 1rem;
  font-weight: 300;
  color: #d5d5d5;
`;

const TagArea = styled.div`
  display: flex;
  margin: 0.2rem 0 -1.25rem 0;
`;

const Tag = styled.div`
  background: rgb(24 144 255 / 38%);
  color: #fff;
  border-radius: 10px;
  padding: 0px 13px;
  margin: 6px 6px 12px 0;
  cursor: pointer;
  
  :hover {
    opacity: 0.7;
  }
`;

const CustomParagraph = styled(Paragraph)`
  p > span {
    font-size: 0.95rem;
    font-weight: 300;
  }
  
  img {
    width: 100%;
  }
`;

export default Post;
