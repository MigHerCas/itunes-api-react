import React from 'react';
import Link from 'next/link';
import IonSearchBar from './IonSearchBar';
import CustomIcon from '../utils/CustomIcon';
import { mdiHomeCircle } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';

export default function Header(): JSX.Element {
  return (
    <header>
      <nav className="header-nav">
        <Link href="/">
          <a>
            <CustomIcon path={mdiHomeCircle} title="Home icon" fill="#fff" />
          </a>
        </Link>
        <IonSearchBar placeholder="Search for items..." />
        <div className="header__favourites-badge">
          <Link href="/favourites">
            <a>
              <CustomIcon path={mdiCardsHeart} title="Heart icon" fill="#fff" />
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
