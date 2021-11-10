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

const Inner = styled.div``;
const Title = styled.h1``;
const DarkModeButton = styled.button``;
