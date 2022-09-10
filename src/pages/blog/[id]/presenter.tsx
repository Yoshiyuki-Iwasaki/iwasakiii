// pages/blog/[id].js
import Layout from '../../../components/layout';
import style from './blog.module.scss';

export default function Presenter({ blog }) {
  return (
    <Layout>
      <p className={style.date}>
        {blog && new Date(blog.publishedAt).toLocaleDateString()}
      </p>
      <h2 className={style.ttl}>{blog && blog.title}</h2>
      <div className={style.className}>
        <div dangerouslySetInnerHTML={{ __html: blog && blog.content }} />
      </div>
    </Layout>
  );
}
