import React from 'react';
import CustomIcon from '../utils/CustomIcon';
import { mdiHomeCircle } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';
import Link from 'next/link';
interface Props {
  children?: React.ReactNode;
}

export default function Header({ children }: Props): JSX.Element {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>
            <CustomIcon path={mdiHomeCircle} title="Home icon" fill="#fff" />
          </a>
        </Link>
        {children}
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
