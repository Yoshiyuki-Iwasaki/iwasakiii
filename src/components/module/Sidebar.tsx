import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Inner>
      <List>
        <ListItem>
          <Link href="/works" as="/works" passHref>
            <Text>Works</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/blog" as="/blog" passHref>
            <Text>Blog</Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/about" as="/about" passHref>
            <Text>About</Text>
          </Link>
        </ListItem>
      </List>
    </Inner>
  );
}

export default Sidebar


const Inner = styled.div`
  width: 30%;
`;
const List = styled.ul``;
const ListItem = styled.li`
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }
`;
const Text = styled.a`
  font-size: 15px;
`;