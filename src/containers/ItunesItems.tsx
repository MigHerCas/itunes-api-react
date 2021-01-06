import React from 'react';
import EmptyResults from '../components/EmptyResults';
import ItunesItem from '../components/ItunesItem';
import useStoreItems from '../hooks/useStoreItems';

export default function ItunesItems(): JSX.Element {
  const { itunesItems } = useStoreItems();

  if (!itunesItems.length) return <EmptyResults />;

  return (
    <ol className="grid itunes-items">
      {itunesItems &&
        itunesItems.map((itunesItem) => {
          const { artistId, artistName, id, imgUrl, isFavourite, title, type } = itunesItem;
          return (
            <ItunesItem
              key={id}
              id={id}
              title={title}
              artistName={artistName}
              artistId={artistId}
              isFavourite={isFavourite}
              type={type}
              imgUrl={imgUrl}
            />
          );
        })}
    </ol>
  );
}
