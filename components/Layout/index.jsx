import React from 'react';
import MainHeader from '../../components/Layout/Header';
import { Layout } from 'antd';

const { Content } = Layout;
const MainLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <MainHeader />
      <Content style={{ padding: '50px 50px' }}>
        {children}
      </Content>
    </Layout>
  )
};

export default MainLayout;