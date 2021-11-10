import React from 'react';
import Sidebar from './Sidebar';
import Header from "./Header";
import styled from 'styled-components';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <Main>
      <Header />
      <Body>
        <Sidebar />
        <RightArea>{children}</RightArea>
      </Body>
    </Main>
  );
};

export default Layout;

const Main = styled.main``;
const Body = styled.div`
  display: flex;
`;
const RightArea = styled.div``;
