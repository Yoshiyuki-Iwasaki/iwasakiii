import React from 'react'
import Layout from '../../components/module/Layout';
import Image from 'next/image'
import Link from 'next/link'
import styled from "styled-components";

const Works = () => {
  return (
    <Layout>
      <List>
        <ListItem>
          <Link href='/' as='/' passHref>
            <Inner>
              <Image src="" />
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
  max-width: 330px;
  max-height: 225px;
`;
const Inner = styled.a``;
const TextArea = styled.div`
  background: #C4C4C4;
`;
const Date = styled.p`
  font-size: 13px;
  color: #333;
`;
const Title = styled.h2`
  font-size: 15px;
  color: #333;
`;
