import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import style from './pages.module.scss';

const Presenter = ({ blogs }) => {
  return (
    <Layout>
      <ul>
        {blogs &&
          blogs.map((blog) => (
            <li key={blog.id} className={style.list}>
              <Link href={`/blog/${blog.id}`} as={`/blog/${blog.id}`} passHref>
                <a>
                  <span className={style.date}>
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                  <span className={style.ttl}>{blog.title}</span>
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
};

export default Presenter;
