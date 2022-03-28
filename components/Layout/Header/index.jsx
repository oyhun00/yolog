import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedKeys } from '@Store/reducers/util';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import styled from '@emotion/styled';

const { Header } = Layout;
const MainHeader = () => {
  const dispatch = useDispatch();
  const setKeys = useCallback((id) => {
    dispatch(selectedKeys(id));
  }, [dispatch]);
  const { util, auth } = useSelector((state) => state);
  const { key } = util;
  const { user } = auth;

  return (
    <CustomHeader>
      <Logo className="logo">
        <Link href="/">
          <a>YoLog</a>
        </Link>
      </Logo>
      <CustomMenu mode="horizontal" defaultSelectedKeys={[key]}>
        <CustomMenuItem key={1} onClick={() => setKeys('1')}>
          <Link href="/introduce">
            <a>Introduce</a>
          </Link>
        </CustomMenuItem>
        <CustomMenuItem key={2} onClick={() => setKeys('2')}>
          <Link href="/post">
            <a>Post</a>
          </Link>
        </CustomMenuItem>
        <CustomMenuItem key={3} onClick={() => setKeys('3')}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </CustomMenuItem>
      </CustomMenu>
    </CustomHeader>
  );
};

const CustomHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0 2.5rem 0;
  height: auto;
`;

const Logo = styled.div`
  a {
    color: #fff;
    text-shadow: 0 0 10px #ffffffb0;
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

const CustomMenu = styled(Menu)`
  justify-content: flex-end;
  border-bottom: 0;
`;

const CustomMenuItem = styled(Menu.Item)`

`;

export default MainHeader;
