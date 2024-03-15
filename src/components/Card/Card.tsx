import emptyLike from '/star.svg';
import fullLike from '/star2.svg';

import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

interface CardProps {
  title: Attributes['canonicalTitle'];
  img: PosterImage['medium'];
  id: AnimeInfo['id'];
  addFavorite: () => void;
  favorite: AnimeInfo['favorite'] | undefined;
}

const Card: React.FC<CardProps> = ({
  title,
  img,
  addFavorite,
  favorite,
  id,
}) => {
  const like = favorite ? fullLike : emptyLike;
  return (
    <li className={styles.card}>
      <Link to={ROUTES.ITEM + id}>
        <img src={img} alt='' />
        <div className={styles.title}>{title}</div>
      </Link>
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
