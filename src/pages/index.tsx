import Presenter from './presenter';
import { client } from '../libs/client';

const Home = ({ blogs }) => {
  return <Presenter blogs={blogs} />;
};

export default Home;

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const blogs = await client.get({ endpoint: 'blogs' });

  return {
    props: {
      blogs: blogs.contents,
    },
  };
};
