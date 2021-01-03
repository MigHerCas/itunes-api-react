import React from 'react';
import CustomIcon from '../utils/CustomIcon';
import { mdiHomeCircle } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';

interface Props {
  children?: React.ReactNode;
}

export default function Header({ children }: Props): JSX.Element {
  return (
    <header className="header">
      <nav>
        <a href="/">
          <CustomIcon path={mdiHomeCircle} title="Home icon" color="#fff" />
        </a>
        {children}
        <div className="header__favourites-badge">
          <a href="/favourites">
            <CustomIcon path={mdiCardsHeart} title="Heart icon" color="#fff" />
            <div className="header__favourites-counter">
              <span>3</span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
