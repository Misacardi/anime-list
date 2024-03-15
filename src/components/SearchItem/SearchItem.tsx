import { FC } from 'react';

import styles from './SearchItem.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

interface SearchItem {
  title: Attributes['canonicalTitle'];
  img: PosterImage['tiny'];
  id: AnimeInfo['id'];
  resetInput: () => void;
}

export const SearchItem: FC<SearchItem> = ({ img, title, id, resetInput }) => {
  return (
    <Link
      onClick={() => resetInput()}
      to={ROUTES.ITEM + id}
      className={styles.search}
    >
      <img className='' src={img} alt='' />

      <div className=''>{title}</div>
    </Link>
  );
};
