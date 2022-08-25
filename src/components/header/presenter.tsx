import React from 'react';
import Link from 'next/link';
import { Box, Center, Text } from '@chakra-ui/react';

const Presenter = () => {
  return (
    <Center py={5}>
      <Box width="800px">
        <Link href="/" as="/" passHref>
          <Text fontSize={22} fontWeight={700}>
            Iwasakiii
          </Text>
        </Link>
      </Box>
    </Center>
  );
};

export default Presenter;
