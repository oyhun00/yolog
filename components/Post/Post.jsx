import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Divider, Breadcrumb } from 'antd';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;
const Post = () => {
  const { post } = useSelector(state => state.post);
  const { id, title, content, crtDttm, udtDttm, deleteFl } = post;

  return (
    <Typography>
      <CustomTitle>{title}</CustomTitle>
      <Breadcrumb>
        <Breadcrumb.Item>{crtDttm}</Breadcrumb.Item>
        <Breadcrumb.Item>portfolio</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Paragraph>
        {content}
      </Paragraph>
    </Typography>
  )
};

const CustomTitle = styled(Title)`
  color: #fff !important;
`;

export default Post;
