import Card from '../card/card';
import styles from './how-it-works-section.module.scss';

type CardItem = {
  title: string;
  content: string;
  svg: string;
};

type CardsData = CardItem[];

const HowItWorksSection = () => {
  const cardsData: CardsData = [
    {
      title: 'Share your link',
      content:
        'Invite your friends to join RatePunk using your personal referral link.',
      svg: 'link.svg'
    },
    {
      title: 'Earn $5 each',
      content:
        'You’ll both receive $5 when your friend signs up for RatePunk using your referral link.',
      svg: 'gift.svg'
    },
    {
      title: 'Earn $10 rewards',
      content:
        'If your friend becomes a paid subscriber to RatePunk, you’ll get an extra $10 reward.',
      svg: 'rewards.svg'
    }
  ];

  return (
    <section className={styles.container}>
      <h2>How it works?</h2>
      {cardsData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          content={card.content}
          svg={card.svg}
        />
      ))}
    </section>
  );
};

export default HowItWorksSection;
