import { Layout } from 'antd';
import styled from '@emotion/styled';
import { GithubOutlined, InstagramOutlined } from '@ant-design/icons';
import { mediaWidth } from '@Constants/responsive';

const { Footer } = Layout;
const MainFooter = () => (
  <CustomFooter>
    <div>
      <span>© 2022</span>
      <span style={{ margin: '0 0.4rem' }}>•</span>
      <span>Yolog</span>
    </div>
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
  background: transparent;

  ${mediaWidth.MEDIA_MOBILE} {
    padding: 1rem 0 3rem 0;
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
