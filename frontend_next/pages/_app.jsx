import { Rubik } from 'next/font/google';

import '@/styles/globals.sass';

const rubik = Rubik({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <main className={rubik.className}>
      <Component {...pageProps} />;
    </main>
  );
}
