// pages/blog/[id].js
import Layout from '../../../components/layout';
import { Box, Text } from '@chakra-ui/react';
import styles from './blog.module.scss';

export default function Presenter({ blog }) {
  return (
    <Layout>
      <Box width="95%">
        <Text fontSize={'18px'} fontWeight={700}>
          {blog && blog.title}
        </Text>
        <Text marginTop={5} fontSize={'14px'}>
          {blog && blog.publishedAt}
        </Text>
        <div className={styles.className}>
          <div dangerouslySetInnerHTML={{ __html: blog && blog.content }} />
        </div>
      </Box>
    </Layout>
  );
}
