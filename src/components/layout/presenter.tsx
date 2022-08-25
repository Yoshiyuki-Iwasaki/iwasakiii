import React, { FC } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import Meta from '../head';
import { LayoutType } from './type';
import { Center, Box, Flex } from '@chakra-ui/react';

const Presenter: FC<LayoutType> = ({ children }) => {
  return (
    <Box>
      <Meta />
      <Header />
      <Center mt={5}>
        <Flex width="800px">
          <Sidebar />
          <Box width="80%">{children}</Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Presenter;
