import { useEffect } from 'react';
import { Pagination } from 'antd';
import styled from '@emotion/styled';
import * as PropTypes from 'prop-types';

const PostPagination = ({ current, total, itemRender, onChange }) => {
  useEffect(() => {
    console.log('PostPagination');
    return
  });

  return (
    <CustomPagination
      size="small"
      total={total}
      defaultPageSize={9}
      itemRender={itemRender}
      onChange={onChange}
    />
  );
};

const CustomPagination = styled(Pagination)`
  margin: 2rem auto 0 auto;
  text-align: center;

  .ant-pagination-item {
    margin: 0 0.3rem;
  }

  .ant-pagination-item-active {
    background: #234a74 !important;
    border-radius: 50%;
    border: 0;
  }

  .ant-pagination-item a, .ant-pagination-item-link {
    color: #fff !important;
    font-size: 1rem;
    font-weight: 300;
  }
  
  .ant-pagination-next > a, .ant-pagination-prev > a {
    color: #fff;
    font-size: 0.8rem;
    margin: 0 0.5rem;
  }
  
  .ant-pagination-disabled > a {
    color: #505050;
  }
`;

export default PostPagination;
