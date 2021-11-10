import React from 'react'
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <Inner>
        <Title>Iwasakiii</Title>
        <DarkModeButton></DarkModeButton>
      </Inner>
    </header>
  );
}

export default Header;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  align-items: center;
  height: 60px;
`;
const Title = styled.h1`
  font-size: 22px;
  color: #fff;
  font-weight: 700;
`;
const DarkModeButton = styled.button``;
