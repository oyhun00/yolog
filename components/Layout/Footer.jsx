import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import styled from '@emotion/styled';
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import { mediaWidth } from '@Constants/responsive';

const { Footer } = Layout;
const MainFooter = () => (
  <CustomFooter>
    <Breadcrumb separator="•">
      <Breadcrumb.Item>© 2022</Breadcrumb.Item>
      <Breadcrumb.Item>Yolog</Breadcrumb.Item>
    </Breadcrumb>
    <IconArea>
      <a href="https://github.com/oyhun00" target="_blank" rel="noreferrer">
        <GithubOutlined style={{ fontSize: '1.4rem' }} />
      </a>
      <a href="https://www.instagram.com/yong_hooooon" target="_blank" rel="noreferrer">
        <InstagramOutlined style={{ fontSize: '1.4rem' }} />
      </a>
    </IconArea>
  </CustomFooter>
);

const CustomFooter = styled(Footer)`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 100;
  
  ${mediaWidth.MEDIA_DESKTOP} {
    padding: 1rem 3.125rem 2.4rem 3.125rem;
  }
`;

const IconArea = styled.div`
  text-align: center;
  
  > a {
    color: #fff;
    margin: 0 0.4rem;
  }
`;

export default MainFooter;
