import React from 'react';
import Layout from '../components/layout';
import { Box, Text, Link } from '@chakra-ui/react';

const Presenter = ({ blogs }) => {
  return (
    <Layout>
      <Box width="95%">
        {blogs &&
          blogs.map((blog) => (
            <Box key={blog.id} mt={'15px'}>
              <Link href={`/blog/${blog.id}`}>
                <Box>
                  <Text fontSize={'12px'}>{blog.publishedAt}</Text>
                  <Text mt={'10px'} fontSize={'14px'}>
                    {blog.title}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
      </Box>
    </Layout>
  );
};

export default Presenter;
