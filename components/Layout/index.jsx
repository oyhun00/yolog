import React from 'react';
import MainHeader from '@Components/Layout/Header';
import { Layout } from 'antd';
import * as PropTypes from 'prop-types';

const { Content } = Layout;
const MainLayout = ({ children }) => (
  <Layout className="layout" style={{ height: '100%' }}>
    <MainHeader />
    <Content style={{ padding: '50px 50px' }}>
      {children}
    </Content>
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
