import Link from 'next/link';
import useFavourites from '../hooks/useFavourites';
import CustomIcon from '../utils/CustomIcon';
import IonSearchBar from '../containers/IonSearchBar';
import { mdiCardsHeart, mdiHomeCircle } from '@mdi/js';

export default function Header(): JSX.Element {
  const { favourites } = useFavourites();

  return (
    <header>
      <nav className="header-nav">
        <Link href="/">
          <a>
            <CustomIcon path={mdiHomeCircle} fill="#fff" />
          </a>
        </Link>
        <IonSearchBar />
        <div className="header__favourites-badge">
          <Link href="/favourites">
            <a>
              <CustomIcon path={mdiCardsHeart} fill="#fff" />
              <div className="header__favourites-counter">
                <span>{favourites.length}</span>
              </div>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
