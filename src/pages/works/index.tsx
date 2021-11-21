import React from 'react'
import Layout from '../../components/module/Layout';
import Link from 'next/link'
import styled from "styled-components";

const Works = () => {
  return (
    <Layout>
      <List>
        <ListItem>
          <Link
            href="https://chatter-197df.web.app/"
            as="https://chatter-197df.web.app/"
            passHref
          >
            <Inner>
              <TextArea>
                <Title>chatter</Title>
                <Description>chatアプリ</Description>
                <Comment>技術スタック: Next.js x Typescript x Firebase</Comment>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://homete-d12f0.web.app/"
            as="https://homete-d12f0.web.app/"
            passHref
          >
            <Inner>
              <TextArea>
                <Title>homete</Title>
                <Description>snsアプリ</Description>
                <Comment>技術スタック: Next.js x Typescript x Firebase</Comment>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://taskboard-a75c1.web.app"
            as="https://taskboard-a75c1.web.app"
            passHref
          >
            <Inner>
              <TextArea>
                <Title>taskboard</Title>
                <Description>task管理アプリ</Description>
                <Comment>技術スタック: Next.js x Typescript x Firebase</Comment>
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
const TextArea = styled.div`
  padding: 10px;
`;
const Title = styled.h2`
  margin-top: 10px;
  font-size: 15px;
  color: #333;
`;
const Description = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #333;
`;
const Comment = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #333;
`;
