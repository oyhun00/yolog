import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Divider, Breadcrumb } from 'antd';
import styled from '@emotion/styled';
import parse from 'html-react-parser';
import { mediaWidth } from '@Constants/responsive';

const { Title, Paragraph } = Typography;
const Post = () => {
  const { post } = useSelector((state) => state.post);
  const {
    title, content, crtDttm, udtDttm, tags,
  } = post;

  const tagList = tags?.map((v) => (<Tag key={v}>{v}</Tag>));

  return (
    <CustomTypography>
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

const CustomTypography = styled(Typography)`
  width: 60%;
  margin: 0 auto;

  ${mediaWidth.MEDIA_TABLET} {
    width: 70%;
  }

  ${mediaWidth.MEDIA_MOBILE} {
    width: 100%;
  }
`;

const CustomTitle = styled(Title)`
  color: #fff !important;
  margin-bottom: 0.3rem !important;
`;

const PostInfo = styled.div`
  display: flex;
`;

const PostDate = styled.div`
  margin-right: 0.6rem;
  font-size: 16px;
`;

const TagArea = styled.div`
  display: flex;
  margin: 5px 0 -20px 0;
`;

const Tag = styled.div`
  background: rgb(24 144 255 / 38%);
  color: #fff;
  border-radius: 10px;
  padding: 2px 16px;
  margin: 6px 6px 12px 0;
  cursor: pointer;
  
  :hover {
    opacity: 0.7;
  }
`;

const CustomParagraph = styled(Paragraph)`
  img {
    width: 100%;
  }
`;

export default Post;
