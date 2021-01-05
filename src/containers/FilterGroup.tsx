import React from 'react';
import Filter from '../components/Filter';
import { FavouritesFilter, ItemsFilter } from '../models';

interface Props {
  filters: Array<ItemsFilter | FavouritesFilter>;
  activeFilter: ItemsFilter | FavouritesFilter;
  toggleFilterCallback: <T>(filter: T) => void;
}

export default function FilterGroup({
  filters,
  activeFilter,
  toggleFilterCallback,
}: Props): JSX.Element {
  return (
    <ol className="visibility-filter__group">
      {filters.length > 0 &&
        filters.map((filter) => (
          <Filter
            key={filter}
            filterOption={filter}
            isActive={activeFilter === filter}
            onClick={() => toggleFilterCallback(filter)}
          />
        ))}
    </ol>
  );
}
