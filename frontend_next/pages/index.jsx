import { Rubik } from 'next/font/google';

import Header from '@/src/components/Header';

const rubik = Rubik({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={rubik.className}>
      <Header />;
    </main>
  );
}
