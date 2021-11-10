import React from "react";
import Link from "next/link";
import Layout from "../../components/module/Layout";
import styled from "styled-components";

const About = () => {
  return (
    <Layout>
      <Inner>
        <HeaderBg></HeaderBg>
        <Icon></Icon>
        <Description>
          説明が入ります。説明が入ります。説明が入ります。 説明が入ります。
          説明が入ります。 説明が入ります。 説明が入ります。 説明が入ります。
          説明が入ります。 説明が入ります。 説明が入ります。 説明が入ります。
        </Description>
        <List>
          <ListItem>
            <Link href="/" as="/" passHref>
              <Text>Twitter</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/" as="/" passHref>
              <Text>Facebook</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/" as="/" passHref>
              <Text>Wantedly</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/" as="/" passHref>
              <Text>Github</Text>
            </Link>
          </ListItem>
        </List>
      </Inner>
    </Layout>
  );
};

export default About;

const Inner = styled.div``;
const HeaderBg = styled.div`
  height: 120px;
  background: #1da1f2;
`;
const Icon = styled.p`
  margin: -50px auto 0;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #fff;
`;
const Description = styled.p`
  margin-top: 25px;
  font-size: 14px;
  line-height: 1.5;
`;
const List = styled.ul`
  margin-top: 40px;
  text-align: center;
`;
const ListItem = styled.li`
  margin-top: 20px;
`;
const Text = styled.a`
  font-size: 14px;
`;
