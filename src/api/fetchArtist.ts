import axios from 'axios';
import { Artist } from '../models';

type ArtistSearchApiResponse = {
  results: Artist[];
};

const { BASE_API_URL } = process.env;

export default function fetchArtist(query: string): Artist | null {
  axios
    .get<ArtistSearchApiResponse>(`${BASE_API_URL}`, {
      params: {
        term: query,
        entity: 'musicArtist',
        country: 'es',
        attribute: 'allArtistTerm',
      },
    })
    .then((response) => {
      return response.data.results[0];
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

  return null;
}
