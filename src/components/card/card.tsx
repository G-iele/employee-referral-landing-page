import Image from 'next/image';
import styles from './card.module.scss';

type CardProps = {
  title: string;
  svg: string;
  content: string;
};

const Card: React.FC<CardProps> = ({ title, svg, content }) => {
  return (
    <div className={styles.cardContainer}>
      <Image src={svg} alt={title} width={40} height={40} />
      <div className={styles.contentContainer}>
        <h4>{title}</h4>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
