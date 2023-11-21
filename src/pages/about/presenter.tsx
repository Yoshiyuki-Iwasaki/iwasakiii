import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';

const Presenter = () => {
  return (
    <Layout>
      <div>
        <p>Front-End Engineer / React, TypeScriptが好きです。</p>
      </div>
      <div>
        <Link
          href="https://twitter.com/_kiiw_"
          as="https://twitter.com/_kiiw_"
          passHref
        >
          <p>Twitter</p>
        </Link>
      </div>
      <div>
        <Link
          href="https://www.facebook.com/profile.php?id=100019753176136"
          as="https://www.facebook.com/profile.php?id=100019753176136"
          passHref
        >
          <p>Facebook</p>
        </Link>
      </div>
      <div>
        <Link
          href="https://www.wantedly.com/id/yoshiyuki_iwasaki"
          as="https://www.wantedly.com/id/yoshiyuki_iwasaki"
          passHref
        >
          <p>Wantedly</p>
        </Link>
      </div>
      <div>
        <Link
          href="https://github.com/Yoshiyuki-Iwasaki"
          as="https://github.com/Yoshiyuki-Iwasaki"
          passHref
        >
          <p>Github</p>
        </Link>
      </div>
    </Layout>
  );
};

export default Presenter;
