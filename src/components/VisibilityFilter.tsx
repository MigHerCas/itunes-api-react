import { FavouritesFilter, ItemsFilter } from '../models';
import FilterGroup from '../containers/FilterGroup';

export default function VisibilityFilter(): JSX.Element {
  const itemsFilters: ItemsFilter[] = ['Track', 'Albums', 'All'];
  const favouritesFilters: FavouritesFilter[] = ['Only favourites', 'Non favourites', 'All'];

  return (
    <nav className="visibility-filter">
      <FilterGroup filterType="Items" filters={itemsFilters} />
      <FilterGroup filterType="Favourites" filters={favouritesFilters} />
    </nav>
  );
}
