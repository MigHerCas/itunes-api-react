import React from 'react';
import ItunesItem from '../components/ItunesItem';
import { Album, Track } from '../models';

interface Props {
  itunesItems: Array<Track | Album>;
}

export default function ItunesItems({ itunesItems }: Props): JSX.Element {
  return (
    <ol className="grid itunes-items">
      {itunesItems &&
        itunesItems.map(({ artistId, artistName, artworkUrl100 }) => {
          return (
            <ItunesItem
              key={artistId}
              id={artistId}
              title="Title example"
              artist={artistName}
              isFavourite={false}
              type="Track"
              imgUrl={artworkUrl100}
            />
          );
        })}
    </ol>
  );
}
