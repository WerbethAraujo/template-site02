import client from '@/src/sanity';

import Header from '@/src/components/Header';
import Benefts from '@/src/components/Benefits';
import ImageText from '@/src/components/imageText';
import Cardapio from '@/src/components/Cardapio';

export default function Home({ header, benefits, about, cardapioItem }) {
  return (
    <>
      <Header header={header} />;
      <main>
        <Benefts benefits={benefits} />;
        <ImageText data={about} />
        <Cardapio cardapio={cardapioItem} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == 'header'][0]`);
  const benefits = await client.fetch(`*[_type == 'benefits'][0..2]`);
  const about = await client.fetch(`*[_type == 'about'][0]`);
  const cardapioItem = await client.fetch(`*[_type == 'cardapioItem'][0..3]`);

  return {
    props: {
      header,
      benefits,
      about,
      cardapioItem,
    },
  };
};
