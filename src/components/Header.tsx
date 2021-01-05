import React from 'react';
import Link from 'next/link';
import IonSearchBar from '../containers/IonSearchBar';
import CustomIcon from '../utils/CustomIcon';
import { mdiHomeCircle } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';

export default function Header(): JSX.Element {
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
                <span>3</span>
              </div>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
