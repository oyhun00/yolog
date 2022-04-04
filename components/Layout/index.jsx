import React from 'react';
import { Layout } from 'antd';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';

import MainHeader from '@Components/Layout/Header';
import MainFooter from '@Components/Layout/Footer';
import { mediaWidth } from '@Constants/responsive';

const { Content } = Layout;
const MainLayout = ({ children }) => (
  <CustomLayout className="layout">
    <MainHeader />
    <MainContent>
      {children}
    </MainContent>
    <MainFooter />
  </CustomLayout>
);

const CustomLayout = styled(Layout)`
  width: 65rem;
  margin: 0 auto;

  ${mediaWidth.MEDIA_DESKTOP} {
    width: 100%;
    padding: 0 2rem;
  }
  
  ${mediaWidth.MEDIA_MOBILE} {
    //width: 100%;
    padding: 0 1rem;
  }
`;

const MainContent = styled(Content)`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 3.125rem;
`;

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
