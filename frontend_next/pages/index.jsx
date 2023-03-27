import client from '@/src/sanity';

import Header from '@/src/components/Header';
import Benefts from '@/src/components/Benefits';

export default function Home({ header, benefits }) {
  return (
    <>
      <Header header={header} />;
      <main>
        <Benefts benefits={benefits} />;
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == 'header'][0]`);
  const benefits = await client.fetch(`*[_type == 'benefits'][0..2]`);

  return {
    props: {
      header,
      benefits,
    },
  };
};
