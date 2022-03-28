import React from 'react';
import { Layout } from 'antd';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';

import MainHeader from '@Components/Layout/Header';
import MainFooter from '@Components/Layout/Footer';
import { mediaWidth } from '@Constants/responsive';

const { Content } = Layout;
const MainLayout = ({ children }) => (
  <Layout className="layout">
    <MainHeader />
    <MainContent>
      {children}
    </MainContent>
    <MainFooter />
  </Layout>
);

const MainContent = styled(Content)`
  width: 65rem;
  margin: 0 auto;
  padding-bottom: 3.125rem;

  ${mediaWidth.MEDIA_DESKTOP} {
    width: 100%;
  }
`;

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
