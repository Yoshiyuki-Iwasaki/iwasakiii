import React from 'react';
import Link from 'next/link';
import { Text, Box } from '@chakra-ui/react';

const Presenter = () => {
  return (
    <Box width={'20%'}>
      <Box>
        <Link href="/" as="/" passHref>
          <Text fontSize={'14px'}>Blog</Text>
        </Link>
      </Box>
      <Box mt={5}>
        <Link href="/about" as="/about" passHref>
          <Text fontSize={'14px'}>About</Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Presenter;
