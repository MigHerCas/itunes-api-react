interface Props {
  placeholder: string;
}

export default function IonSearchBar({ placeholder }: Props): JSX.Element {
  return <input className="ion-searchbar" type="search" name="search" placeholder={placeholder} />;
}
