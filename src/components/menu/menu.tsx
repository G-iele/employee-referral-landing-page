import Image from 'next/image';
import Link from 'next/link';

import styles from './menu.module.scss';

type ListItem = {
  title: string;
  icon: string;
  url: string;
};

type MenuItem = {
  title: string;
  list: ListItem[];
};

const Menu = () => {
  const menu: MenuItem[] = [
    {
      title: 'Travel deals',
      list: [
        {
          title: 'Flight Deals',
          icon: 'flight.svg',
          url: '/'
        },
        {
          title: 'Bundle Deals',
          icon: 'bundle.svg',
          url: '/'
        },
        {
          title: 'Departure Airports',
          icon: 'departure.svg',
          url: '/'
        },
        {
          title: 'Deals Upgrades',
          icon: 'deals.svg',
          url: '/'
        }
      ]
    },
    {
      title: 'Saving Tools',
      list: [
        {
          title: 'Price Tracking',
          icon: 'price.svg',
          url: '/'
        },
        {
          title: 'Rebooking',
          icon: 'rebooking.svg',
          url: '/'
        },
        {
          title: 'Cashback',
          icon: 'cashback.svg',
          url: '/'
        }
      ]
    },
    {
      title: 'Account',
      list: [
        {
          title: 'My Profile',
          icon: 'profile.svg',
          url: '/'
        },
        {
          title: 'My Wallet',
          icon: 'wallet.svg',
          url: '/'
        },
        {
          title: 'Refer Friends',
          icon: 'refer.svg',
          url: '/refer'
        },
        {
          title: 'My Bookings',
          icon: 'bookings.svg',
          url: '/'
        },
        {
          title: 'My Vouchers',
          icon: 'vouchers.svg',
          url: '/'
        }
      ]
    }
  ];

  return (
    <aside>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.title}>
            <h5>{menuItem.title}</h5>
            <ul>
              {menuItem.list.map((listItem) => (
                <li key={listItem.title}>
                  <Link href={listItem.url}>
                    <Image
                      src={listItem.icon}
                      alt={listItem.title}
                      width={18}
                      height={18}
                      style={{ marginRight: '8px' }}
                    />
                    {listItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
