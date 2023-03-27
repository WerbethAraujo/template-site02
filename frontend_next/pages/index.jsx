import { Rubik } from 'next/font/google';
import client from '@/src/sanity';

import Header from '@/src/components/Header';

const rubik = Rubik({ subsets: ['latin'] });

export default function Home({ header }) {
  return (
    <main className={rubik.className}>
      <Header header={header} />;
    </main>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == 'header'][0]`);

  return {
    props: {
      header,
    },
  };
};
