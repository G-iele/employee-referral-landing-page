import Image from 'next/image';
import { SideMenu } from './types';

export const SIDEMENU_ITEMS: SideMenu[] = [
  {
    title: 'Travel deals',
    list: [
      {
        title: 'Flight Deals',
        icon: <Image src="/flight.svg" alt="fligt" width={18} height={18} />,
        url: '/flight'
      },
      {
        title: 'Bundle Deals',
        icon: <Image src="/bundle.svg" alt="bundle" width={18} height={18} />,
        url: '/bundle'
      },
      {
        title: 'Departure Airports',
        icon: (
          <Image src="/departure.svg" alt="departure" width={18} height={18} />
        ),
        url: '/departure'
      },
      {
        title: 'Deals Upgrades',
        icon: <Image src="/deals.svg" alt="deals" width={18} height={18} />,
        url: '/deals'
      }
    ]
  },
  {
    title: 'Saving Tools',
    list: [
      {
        title: 'Price Tracking',
        icon: <Image src="/price.svg" alt="price" width={18} height={18} />,
        url: '/price'
      },
      {
        title: 'Rebooking',
        icon: (
          <Image src="/rebooking.svg" alt="rebooking" width={18} height={18} />
        ),
        url: '/rebooking'
      },
      {
        title: 'Cashback',
        icon: (
          <Image src="/cashback.svg" alt="cashback" width={18} height={18} />
        ),
        url: '/cashback'
      }
    ]
  },
  {
    title: 'Account',
    list: [
      {
        title: 'My Profile',
        icon: <Image src="/profile.svg" alt="profile" width={18} height={18} />,
        url: '/profile'
      },
      {
        title: 'My Wallet',
        icon: <Image src="/wallet.svg" alt="wallet" width={18} height={18} />,
        url: '/wallet'
      },
      {
        title: 'Refer Friends',
        icon: <Image src="/refer.svg" alt="refer" width={18} height={18} />,
        url: '/refer'
      },
      {
        title: 'My Bookings',
        icon: (
          <Image src="/bookings.svg" alt="bookings" width={18} height={18} />
        ),
        url: '/bookings'
      },
      {
        title: 'My Vouchers',
        icon: (
          <Image src="/vouchers.svg" alt="vouchers" width={18} height={18} />
        ),
        url: '/vouchers'
      }
    ]
  }
];
