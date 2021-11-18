import React from 'react';
import { Layout, Menu } from 'antd';
import styled from '@emotion/styled';

const { Header } = Layout;
const MainHeader = () => {
  return (
    <>
      <Header>
        <div className="logo" />
        <HeaderMenu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key={1}>Introduce</Menu.Item>
          <Menu.Item key={2}>Post</Menu.Item>
        </HeaderMenu>
      </Header>
    </>
  )
};

const HeaderMenu = styled(Menu)`
  justify-content: flex-end;
`;

export default MainHeader;