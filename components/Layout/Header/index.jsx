import React from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import styled from '@emotion/styled';

const { Header } = Layout;
const MainHeader = () => {
  return (
    <>
      <CustomHeader>
        <div className="logo">
          <Link href="/">
            <a>yolog</a>
          </Link>
        </div>
        <CustomMenu mode="horizontal" defaultSelectedKeys={['1']}>
          <CustomMenuItem key={1}>
            <Link href="/introduce">
              <a>Introduce</a>
            </Link>
          </CustomMenuItem>
          <CustomMenuItem key={2}>
            <Link href="/post">
              <a>Post</a>
            </Link>
          </CustomMenuItem>
        </CustomMenu>
      </CustomHeader>
    </>
  )
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

`

export default MainHeader;