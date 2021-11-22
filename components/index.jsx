import React from 'react';
import { Layout } from 'antd';
import MainHeader from './Layout/Header';

const { Content } = Layout;
const index = () => {
  return (
    <Layout className="layout">
      <MainHeader />
      <Content style={{ padding: '0 50px' }}>
        Index Component
      </Content>
    </Layout>
  )
};

export default index;