import React from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import Meta from '../head';
import { Main, Body, RightArea } from './style';
import { LayoutType } from './type';

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <Main>
      <Meta />
      <Header />
      <Body>
        <Sidebar />
        <RightArea>{children}</RightArea>
      </Body>
    </Main>
  );
};

export default Layout;
