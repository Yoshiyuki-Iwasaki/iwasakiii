import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../../components/templates/layout';

const Presenter = () => {
  return (
    <Layout>
      <Inner>
        <HeaderBg></HeaderBg>
        <Icon></Icon>
        <Description>
          Front-End Engineer / React, TypeScriptが好きです。
        </Description>
        <List>
          <ListItem>
            <Link
              href="https://twitter.com/_kiiw_"
              as="https://twitter.com/_kiiw_"
              passHref
            >
              <Text>Twitter</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.facebook.com/profile.php?id=100019753176136"
              as="https://www.facebook.com/profile.php?id=100019753176136"
              passHref
            >
              <Text>Facebook</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.wantedly.com/id/yoshiyuki_iwasaki"
              as="https://www.wantedly.com/id/yoshiyuki_iwasaki"
              passHref
            >
              <Text>Wantedly</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://github.com/Yoshiyuki-Iwasaki"
              as="https://github.com/Yoshiyuki-Iwasaki"
              passHref
            >
              <Text>Github</Text>
            </Link>
          </ListItem>
        </List>
      </Inner>
    </Layout>
  );
};

export default Presenter;

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
