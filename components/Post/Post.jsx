import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { Typography, Divider } from 'antd';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import parse from 'html-react-parser';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import 'react-quill/dist/quill.snow.css';

import { mediaWidth } from '@Constants/responsive';
import { deletePost } from '@Store/reducers/post';

const { Title, Paragraph } = Typography;
const Post = () => {
  const dispatch = useDispatch();
  const postDelete = useCallback((id) => {
    dispatch(deletePost(id));
  }, [dispatch]);
  const { post, auth } = useSelector((state) => state);
  const { postDetail } = post;
  const { isLogin } = auth;
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
    <PostWrap>
      <LeftContents>
        <div style={{ position: 'absolute' }}>
          <div style={{ position: 'fixed' }}>
            <PostInfo>
              <PostDate>{udtDttm || crtDttm}</PostDate>
            </PostInfo>
            <h4>Tags</h4>
            <TagArea>{tagList}</TagArea>
            {
              isLogin ? (
                <AdminArea>
                  <div onClick={() => postDelete(id)} aria-hidden="true"><DeleteOutlined />삭제</div>
                  <div onClick={() => Router.push(`/post/modify/${id}`)} aria-hidden="true"><FormOutlined />수정</div>
                </AdminArea>
              ) : ''
            }
          </div>
        </div>
      </LeftContents>
      <CustomTypography>
        <CustomTitle>{title}</CustomTitle>
        <DescriptionsArea>
          <PostInfo>
            <PostDate className="post-date">{udtDttm || crtDttm}</PostDate>
          </PostInfo>
          <TagArea>{tagList}</TagArea>
          <Divider />
        </DescriptionsArea>
        <CustomParagraph>
          {parse(content)}
        </CustomParagraph>
      </CustomTypography>
    </PostWrap>
  );
};

const PostWrap = styled.div`
  display: flex;
`;

const LeftContents = styled.div`
  width: 23%;
  position: relative;
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  ${mediaWidth.MEDIA_DESKTOP} {
    display: none;
  }
`;

const AdminArea = styled.div`
  margin-top: 3rem;
  
  > div {
    margin-bottom: 0.2rem;
    color: #d1d1d1;
    
    > span {
      margin-right: 0.4rem;
      font-size: 0.9rem;
    }
  }
  
  ${mediaWidth.MEDIA_MOBILE} {
    display: none;
  }
`;

const CustomTypography = styled(Typography)`
  width: 77%;
  margin: 0 auto;
  position: relative;

  ${mediaWidth.MEDIA_DESKTOP} {
    width: 100%;
  }
`;

const CustomTitle = styled(Title)`
  color: #fff !important;
  margin: 0 0 3rem 0 !important;
  text-align: center;
  
  ${mediaWidth.MEDIA_DESKTOP} {
    margin: 0 0 1rem 0 !important;
    text-align: left;
  }
  
  ${mediaWidth.MEDIA_MOBILE} {
    font-size: 1.4rem !important;
  }
`;

const DescriptionsArea = styled.div`
  display: none;

  .post-date {
    margin-bottom: 0;
  }
  
  ${mediaWidth.MEDIA_DESKTOP} {
    display: block;
  }
`;

const PostInfo = styled.div`
  display: flex;
`;

const PostDate = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 300;
  color: #d5d5d5;
  
  ${mediaWidth.MEDIA_MOBILE} {
    font-size: 0.9rem;
  }
`;

const TagArea = styled.div`
  //display: flex;
  margin: 0.2rem 0 -1.25rem 0;
`;

const Tag = styled.div`
  background: rgb(24 144 255 / 38%);
  color: #fff;
  border-radius: 10px;
  padding: 0px 13px;
  margin: 6px 6px 12px 0;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  
  :hover {
    opacity: 0.7;
  }
  
  ${mediaWidth.MEDIA_MOBILE} {
    font-size: 0.8rem;
  }
`;

const CustomParagraph = styled(Paragraph)`
  p {
    ${mediaWidth.MEDIA_MOBILE} {
      font-size: 0.9rem;
    }  
  }
  
  p > span {
    ${mediaWidth.MEDIA_MOBILE} {
      font-size: 0.9rem;
    }
  }
  
  img {
    width: 100%;
  }

  .ant-typography h1 {
    ${mediaWidth.MEDIA_MOBILE} {
      font-size: 1.8rem;
    }
  }
`;

export default Post;
