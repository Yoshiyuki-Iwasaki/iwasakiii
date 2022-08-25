// pages/blog/[id].js
import Layout from '../../../components/layout';
import { Box, Text } from '@chakra-ui/react';
import { MarkdownTemplate } from '../../../components/markdown';

export default function Presenter({ blog }) {
  return (
    <Layout>
      <Box width="95%">
        <Text fontSize={'18px'} fontWeight={700}>
          {blog.title}
        </Text>
        <Text marginTop={5} fontSize={'14px'}>
          {blog.publishedAt}
        </Text>
        <MarkdownTemplate source={blog.content} />
      </Box>
    </Layout>
  );
}
