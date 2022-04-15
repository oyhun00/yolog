import Link from 'next/link';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import { mediaWidth } from '@Constants/responsive';

const { Header } = Layout;
const MainHeader = () => (
  <CustomHeader>
    <Logo className="logo">
      <Link href="/">YoLog</Link>
    </Logo>
    <Menu>
      <MenuItem>
        <Link href="/about">About</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/">Post</Link>
      </MenuItem>
    </Menu>
  </CustomHeader>
);

const CustomHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 2.5rem 0;
  height: auto;
  background: transparent;

  ${mediaWidth.MEDIA_MOBILE} {
    padding: 0.8rem 0 0.6rem 0;
  }
`;

const Logo = styled.div`
  a {
    color: #fff;
    text-shadow: 0 0 10px #ffffffb0;
    font-size: 2.5rem;
    font-weight: 600;

    ${mediaWidth.MEDIA_MOBILE} {
      font-size: 2rem;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 0;
`;

const MenuItem = styled.div`
  margin-left: 2rem;
  
  > a {
    color: #fff;
    font-size: 1rem;
    
    :hover {
      text-shadow: 0 0 13px #ffffffdb;
      transition: 0.4s;
    }

    ${mediaWidth.MEDIA_MOBILE} {
      font-size: 1rem;
    }
  }
`;

export default MainHeader;
