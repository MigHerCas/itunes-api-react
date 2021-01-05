interface Props {
  query: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ query, onChange }: Props): JSX.Element {
  return (
    <input
      onChange={(e) => onChange(e)}
      className="ion-searchbar"
      type="search"
      name="search"
      placeholder="Search for an artist"
      defaultValue={query}
    />
  );
}
