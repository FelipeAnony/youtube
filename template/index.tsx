import Head from 'next/head';
import Header from '../components/Header';

type Props = {
  children: React.ReactElement;
};

function Template({ children }: Props) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  );
}

export default Template;
