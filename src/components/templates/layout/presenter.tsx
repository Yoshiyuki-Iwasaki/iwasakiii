import React, { FC } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import Meta from '../head';
import { LayoutType } from './type';
import { Main, Body, RightArea } from './style';

const Presenter: FC<LayoutType> = ({ children }) => {
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

export default Presenter;
