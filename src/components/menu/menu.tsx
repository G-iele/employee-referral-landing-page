'use client';

import Link from 'next/link';

import styles from './menu.module.scss';
import { usePathname } from 'next/navigation';
import { SIDEMENU_ITEMS } from '@/constants';

type MenuProps = {
  onLinkClick?: () => void;
};

const Menu = ({ onLinkClick }: MenuProps) => {
  const pathname = usePathname();

  return (
    <aside>
      <ul className={styles.menuList}>
        {SIDEMENU_ITEMS.map((category) => (
          <li key={category.title}>
            <h5>{category.title.toUpperCase()}</h5>
            <ul>
              {category.list.map((listItem) => {
                const isActive = pathname === listItem.url;
                return (
                  <li key={listItem.title}>
                    <Link
                      href={listItem.url}
                      className={`${styles.menu__link} ${
                        isActive ? styles.active : ''
                      }`}
                      onClick={onLinkClick}
                    >
                      {listItem.icon}
                      {listItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
