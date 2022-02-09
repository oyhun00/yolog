import React from 'react';
import MainHeader from '@Components/Layout/Header';
import { Layout } from 'antd';

const { Content } = Layout;
const MainLayout = ({ children }) => (
  <Layout className="layout">
    <MainHeader />
    <Content style={{ padding: '50px 50px' }}>
      {children}
    </Content>
  </Layout>
);

export default MainLayout;
