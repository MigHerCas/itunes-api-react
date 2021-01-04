import Filter from './Filter';

export default function VisibilityFilter(): JSX.Element {
  return (
    <nav className="visibility-filter">
      <ol className="visibility-filter__group visibility-filter__types">
        <Filter filterType="Tracks" />
        <Filter filterType="Albums" />
        <Filter filterType="All" />
      </ol>
      <ol className="visibility-filter__group visibility-filter__favourites">
        <Filter filterType="Only favourites" />
        <Filter filterType="Not favourites" />
        <Filter filterType="All" />
      </ol>
    </nav>
  );
}
