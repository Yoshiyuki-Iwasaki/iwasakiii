import React from 'react'
import Layout from '../../components/module/Layout';
import Link from 'next/link'
import styled from "styled-components";

const Works = () => {
  return (
    <Layout>
      <List>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
      </List>
    </Layout>
  );
}

export default Works;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-top: 20px;
  width: 100%;
  height: 180px;
  background: #c4c4c4;

  &:first-child {
    margin-top: 0;
  }
`;
const Inner = styled.a``;
const EyeCatch = styled.div`
  width: 100%;
  height: 110px;
  background: #fff;
`;
const TextArea = styled.div`
  padding: 10px;
`;
const Date = styled.p`
  font-size: 13px;
  color: #333;
`;
const Title = styled.h2`
  margin-top: 10px;
  font-size: 15px;
  color: #333;
`;
