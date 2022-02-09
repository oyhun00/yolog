import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedKeys } from '@Store/reducers/util';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import styled from '@emotion/styled';

const { Header } = Layout;
const MainHeader = () => {
  const dispatch = useDispatch();
  const setKeys = useCallback((id) => {
    dispatch(selectedKeys(id));
  }, [dispatch]);
  const { key } = useSelector((state) => state.util);

  return (
    <CustomHeader>
      <div className="logo">
        <Link href="/">
          <a>yolog</a>
        </Link>
      </div>
      <CustomMenu mode="horizontal" defaultSelectedKeys={[key]}>
        <CustomMenuItem key={1} onClick={() => setKeys('1')}>
          <Link href="/introduce">
            <a>Introduce</a>
          </Link>
        </CustomMenuItem>
        <CustomMenuItem key={2} onClick={() => setKeys('2')}>
          <Link href="/post">
            <a>Post</a>
          </Link>
        </CustomMenuItem>
      </CustomMenu>
    </CustomHeader>
  );
};

const CustomHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
`;

const CustomMenu = styled(Menu)`
  justify-content: flex-end;
  border-bottom: 0;
`;

const CustomMenuItem = styled(Menu.Item)`

`;

export default MainHeader;
