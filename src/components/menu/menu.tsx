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
      <ul className={styles.menu__list}>
        {SIDEMENU_ITEMS.map((category) => (
          <li key={category.title} className={styles.menu__category}>
            <h5 className={styles.menu__title}>
              {category.title.toUpperCase()}
            </h5>
            <ul className={styles.menu__links}>
              {category.list.map((listItem) => {
                const isActive = pathname === listItem.url;
                return (
                  <li key={listItem.title} className={styles.menu__item}>
                    <Link
                      href={listItem.url}
                      className={
                        isActive
                          ? `${styles.menu__link} ${styles['menu__link--active']}`
                          : styles.menu__link
                      }
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
