import React from 'react';
import Link from 'next/link';
import { Inner, List, ListItem, Text } from './style';

const Presenter = () => {
  return (
    <Inner>
      <List>
        <ListItem>
          <Link href="/top" as="/" passHref>
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
};

export default Presenter;
