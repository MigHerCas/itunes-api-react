import React from 'react';
import EmptyResults from '../components/EmptyResults';
import ItunesItem from '../components/ItunesItem';
import useFavourites from '../hooks/useFavourites';
import useFetchDiscography from '../hooks/useFetchDiscography';

interface Props {
  favouritesOnly?: boolean;
}

export default function ItunesItems({ favouritesOnly = false }: Props): JSX.Element {
  const { discography } = useFetchDiscography();
  const { favourites } = useFavourites();

  if (!discography || !discography.length) return <EmptyResults />;

  return (
    <ol className="grid itunes-items">
      {(favouritesOnly ? favourites : discography).map((itunesItem) => {
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
