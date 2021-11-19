import React from 'react';
import { Layout, Menu } from 'antd';
import styled from '@emotion/styled';

const { Header } = Layout;
const MainHeader = () => {
  return (
    <>
      <CustomHeader>
        <div className="logo">yolog</div>
        <CustomMenu mode="horizontal" defaultSelectedKeys={['1']}>
          <CustomMenuItem key={1}>Introduce</CustomMenuItem>
          <CustomMenuItem key={2}>Post</CustomMenuItem>
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
`;

const CustomMenuItem = styled(Menu.Item)`

`

export default MainHeader;