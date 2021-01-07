import React from 'react';
import EmptyResults from '../components/EmptyResults';
import ItunesItem from '../components/ItunesItem';
import useFetchDiscography from '../hooks/useFetchDiscography';

export default function ItunesItems(): JSX.Element {
  const { discography } = useFetchDiscography();

  if (!discography || !discography.length) return <EmptyResults />;

  return (
    <ol className="grid itunes-items">
      {discography.map((itunesItem) => {
        const { artistId, artistName, id, imgUrl, title, type } = itunesItem;
        return (
          <ItunesItem
            key={id}
            id={id}
            title={title}
            artistName={artistName}
            artistId={artistId}
            type={type}
            imgUrl={imgUrl}
          />
        );
      })}
    </ol>
  );
}
