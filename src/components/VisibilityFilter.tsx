import React from 'react';
import FilterGroup from './FilterGroup';

export default function VisibilityFilter(): JSX.Element {
  const itemsFilters = ['Track', 'Albums', 'All'];
  const favouritesFilters = ['Only favourites', 'Non favourites', 'All'];

  return (
    <nav className="visibility-filter">
      <FilterGroup filterType="Items" filters={itemsFilters} />
      <FilterGroup filterType="Favourites" filters={favouritesFilters} />
    </nav>
  );
}
