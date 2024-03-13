import emptyLike from '/star.svg';
import fullLike from '/star2.svg';

import styles from './Card.module.css';

interface CardProps {
  title: Attributes['canonicalTitle'];
  img: PosterImage['medium'];
  addFavorite: () => void;
  favorite: AnimeInfo['favorite'] | undefined;
}

const Card: React.FC<CardProps> = ({ title, img, addFavorite, favorite }) => {
  const like = favorite ? fullLike : emptyLike;
  return (
    <li className={styles.card}>
      <img src={img} alt='' />
      <div className={styles.title}>{title}</div>
      <img
        src={like}
        onClick={() => addFavorite()}
        alt='Like'
        className={styles.like}
      />
    </li>
  );
};

export default Card;
