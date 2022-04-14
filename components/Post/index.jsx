import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Row } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import PostBox from '@Components/Post/PostBox';
import PostPagination from '@Components/Post/Pagination';
import { mediaWidth } from '@Constants/responsive';

const PostComponent = () => {
  const router = useRouter();
  const { post, auth } = useSelector((state) => state);
  const { posts, tags, postsCount } = post;
  const { isLogin } = auth;

  const onSearchByTag = (tag, e) => {
    Router.push({
      pathname: '/',
      query: {
        tag,
      },
    });

    e.stopPropagation();
  };

  const postSection = posts.map((v) => (
    <PostBox key={v.id} data={v} onSearchByTag={onSearchByTag} />
  ));

  const tagList = tags.map((v) => (
    <div key={v.mostTags} onClick={(e) => onSearchByTag(v.mostTags, e)} aria-hidden="true">
      #{v.mostTags} <span>({v.tagCount})</span>
    </div>
  ));

  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a href={() => false}>Prev</a>;
    }
    if (type === 'next') {
      return <a href={() => false}>Next</a>;
    }
    return originalElement;
  };

  const onChangePage = (page) => {
    const query = router.query.tag ? {
      tag: router.query.tag,
      page,
    } : { page };

    Router.push({
      pathname: '/',
      query,
    });
  };

  return (
    <PostListWrap>
      <div style={{ position: 'relative' }}>
        <TagAreaWrap>
          {
            isLogin ? (
              <AdminArea>
                <Link href="/post/write">
                  <span><EditOutlined /> 글쓰기</span>
                </Link>
              </AdminArea>
            ) : ''
          }
          <TagArea>{tagList}</TagArea>
        </TagAreaWrap>
        { router.query.tag ? (<Category>{router.query.tag}</Category>) : '' }
        <PostRow gutter={[24, 24]}>
          { postSection }
        </PostRow>
        <PostPagination
          current={parseInt(router.query.page, 10)}
          total={parseInt(postsCount, 10)}
          itemRender={itemRender}
          onChange={onChangePage}
        />
      </div>
    </PostListWrap>
  );
};

const PostListWrap = styled.div`
  margin: 0 auto;
`;

const PostRow = styled(Row)`
  position: relative;
  padding-bottom: 3rem;

  @media only screen and (max-width: 1375px) {
    width: 90%;
  }
  
  ${mediaWidth.MEDIA_MOBILE} {
    width: unset;
  }
  
  img {
    object-fit: cover;
    height: 100%;
  }
  
  :last-child {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const Category = styled.div`
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 400;
  text-shadow: 0 0 14px #ffffffe0;
  
  &:first-of-type {
    margin: 0 0 0.5rem 0;
  }
`;

const TagAreaWrap = styled.div`
  position: absolute;
  left: 100%;

  @media only screen and (max-width: 1375px) {
    left: 90%;
  }
  
  ${mediaWidth.MEDIA_MOBILE} {
    display: none;
  }
`;

const TagArea = styled.div`
  position: fixed;
  font-weight: 100;
  font-size: 0.9rem;
  margin: 0 0 0 2rem;

  @media only screen and (max-width: 1375px) {
    margin: 0;
  }
  
  > div {
    margin-bottom: 0.4rem;
    cursor: pointer;
    
    > span {
      font-size: 0.8rem;
    }
    
    :hover {
      opacity: 0.7;
    }
  }
`;

const AdminArea = styled.div`
  position: fixed;
  margin: -1.9rem 0 0 2rem;
  
  @media only screen and (max-width: 1375px) {
    margin: -1.9rem 0 0 0;
  }

  ${mediaWidth.MEDIA_MOBILE} {
    display: none;
  }
  
  span {
    font-size: 1rem;
  }
`;

export default PostComponent;
