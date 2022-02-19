import Link from 'next/link';
import Layout from '../components/templates/layout';
import styled from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <List>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/" as="/" passHref>
            <Inner>
              <EyeCatch></EyeCatch>
              <TextArea>
                <Date>2012/11/10</Date>
                <Title>タイトルが入ります。タイトルが入ります。</Title>
              </TextArea>
            </Inner>
          </Link>
        </ListItem>
      </List>
    </Layout>
  );
};

export default Home;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  margin-top: 20px;
  margin-left: 0;
  width: 230px;
  height: 200px;
  background: #c4c4c4;

  &:first-child,
  &:nth-child(2) {
    margin-top: 0;
  }

  &:nth-child(even) {
    margin-left: 20px;
  }
`;
const Inner = styled.a``;
const EyeCatch = styled.div`
  width: 100%;
  height: 110px;
  background: #fff;
`;
const TextArea = styled.div`
  padding: 10px;
`;
const Date = styled.p`
  font-size: 13px;
  color: #333;
`;
const Title = styled.h2`
  margin-top: 10px;
  font-size: 15px;
  color: #333;
  line-height: 1.4;
`;
