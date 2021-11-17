import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
const MainHeader = () => {
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={1}>test</Menu.Item>
        </Menu>
      </Header>
    </>
  )
};

export default MainHeader;