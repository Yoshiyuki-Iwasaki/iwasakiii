import React from 'react';
import Sidebar from './Sidebar';
import Header from "./Header";
import Meta from './Head';
import styled from "styled-components";

const Layout: React.FC<any> = ({ children }) => {
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

const Main = styled.main``;
const Body = styled.div`
  margin: 40px auto 0;
  max-width: 600px;
  display: flex;
`;
const RightArea = styled.div`
  width: 80%;
`;
