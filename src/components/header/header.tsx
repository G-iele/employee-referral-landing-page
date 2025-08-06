'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from '../menu/menu';

import styles from './header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="logo.svg" alt="logo" width={128} height={32} priority />
      </Link>

      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/hotels">Hotels</Link>
          </li>
          <li>
            <Link href="/extension">Extension</Link>
          </li>
          <li>
            <Link href="/press">Press</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.header__button}
      >
        <Image
          src={menuOpen ? 'close.svg' : 'menu.svg'}
          alt={menuOpen ? 'Close menu' : 'Open menu'}
          width={32}
          height={32}
        />
      </button>

      {menuOpen && (
        <div className={styles.header__menu}>
          <Menu />
        </div>
      )}
    </header>
  );
};

export default Header;
