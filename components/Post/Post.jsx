import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Divider, Breadcrumb } from 'antd';
import styled from '@emotion/styled';
import parse from 'html-react-parser';

const { Title, Paragraph } = Typography;
const Post = () => {
  const { post } = useSelector((state) => state.post);
  const {
    title, content, crtDttm, udtDttm,
  } = post;

  return (
    <Typography>
      <CustomTitle>{title}</CustomTitle>
      <Breadcrumb>
        <Breadcrumb.Item>{udtDttm || crtDttm}</Breadcrumb.Item>
        <Breadcrumb.Item>portfolio</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Paragraph>
        {parse(content)}
      </Paragraph>
    </Typography>
  );
};

const CustomTitle = styled(Title)`
  color: #fff !important;
`;

export default Post;
