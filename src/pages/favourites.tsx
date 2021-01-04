import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import VisibilityFilter from '../components/VisibilityFilter';

export default function Favourites(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Favourites page</title>
        <link rel="icon" href="/" />
      </Head>
      <Header />
      <main>
        <PageTitle text="Favourites" />
        <VisibilityFilter />
      </main>
    </div>
  );
}
