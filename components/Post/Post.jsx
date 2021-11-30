import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testEvent } from '../../store/modules/post';
import { Typography, Divider, Breadcrumb } from 'antd';
import styled from '@emotion/styled';

const { Title, Paragraph, Text } = Typography;
const Post = () => {
  const dispatch = useDispatch();
  const num = useSelector(state => state);

  const onClickPlus = useCallback(() => {
    dispatch(testEvent());
  }, dispatch);

  return (
    <Typography>
      <CustomTitle>첫번째 포스트 제목</CustomTitle>
      <Breadcrumb>
        <Breadcrumb.Item>21. 03. 22</Breadcrumb.Item>
        <Breadcrumb.Item>portfolio</Breadcrumb.Item>
      </Breadcrumb>
      <Divider />
      <Paragraph>
        num : {num}
        <button onClick={onClickPlus}>+</button>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wit
      </Paragraph>
    </Typography>
  )
};

const CustomTitle = styled(Title)`
  color: #fff !important;
`;

export default Post;
