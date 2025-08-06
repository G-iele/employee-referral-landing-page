import Image from 'next/image';
import styles from './card.module.scss';

type CardProps = {
  title: string;
  svg: string;
  content: string;
};

const Card: React.FC<CardProps> = ({ title, svg, content }) => {
  return (
    <div className={styles.card}>
      <Image src={svg} alt={title} width={40} height={40} />
      <div className={styles.card__content}>
        <h4>{title}</h4>
        <p className={styles.card__text}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
