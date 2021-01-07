import React from 'react';
import useStoreItems from '../hooks/useStoreItems';
import EmptyResults from '../components/EmptyResults';
import ItunesItem from '../components/ItunesItem';

export default function ItunesItems(): JSX.Element {
  const { itunesItems } = useStoreItems();

  if (!itunesItems || !itunesItems.length) return <EmptyResults />;

  return (
    <ol className="grid itunes-items">
      {itunesItems.map((itunesItem) => {
        const { artistId, artistName, id, imgUrl, isFavourite, title, type, onToggle } = itunesItem;
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
            onToggle={onToggle}
          />
        );
      })}
    </ol>
  );
}
