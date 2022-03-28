import React from 'react';
import { Layout } from 'antd';
import * as PropTypes from 'prop-types';

import MainHeader from '@Components/Layout/Header';
import MainFooter from '@Components/Layout/Footer';

const { Content } = Layout;
const MainLayout = ({ children }) => (
  <Layout className="layout">
    <MainHeader />
    <Content style={{ padding: '50px 50px' }}>
      {children}
    </Content>
    <MainFooter />
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
