import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { Box, Center, Text } from '@chakra-ui/react';

const Presenter = () => {
  return (
    <Layout>
      <Box>
        <Center mt={'10px'}>
          <Text fontSize={'14px'}>
            Front-End Engineer / React, TypeScriptが好きです。
          </Text>
        </Center>
        <Center mt={'15px'}>
          <Link
            href="https://twitter.com/_kiiw_"
            as="https://twitter.com/_kiiw_"
            passHref
          >
            <Text fontSize={'14px'}>Twitter</Text>
          </Link>
        </Center>
        <Center mt={'10px'}>
          <Link
            href="https://www.facebook.com/profile.php?id=100019753176136"
            as="https://www.facebook.com/profile.php?id=100019753176136"
            passHref
          >
            <Text fontSize={'14px'}>Facebook</Text>
          </Link>
        </Center>
        <Center mt={'10px'}>
          <Link
            href="https://www.wantedly.com/id/yoshiyuki_iwasaki"
            as="https://www.wantedly.com/id/yoshiyuki_iwasaki"
            passHref
          >
            <Text fontSize={'14px'}>Wantedly</Text>
          </Link>
        </Center>
        <Center mt={'10px'}>
          <Link
            href="https://github.com/Yoshiyuki-Iwasaki"
            as="https://github.com/Yoshiyuki-Iwasaki"
            passHref
          >
            <Text fontSize={'14px'}>Github</Text>
          </Link>
        </Center>
      </Box>
    </Layout>
  );
};

export default Presenter;
