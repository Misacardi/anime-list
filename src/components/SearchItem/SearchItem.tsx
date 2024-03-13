import { FC } from 'react';

import styles from './SearchItem.module.css';

interface SearchItem {
  title: Attributes['canonicalTitle'];
  img: PosterImage['tiny'];
}

export const SearchItem: FC<SearchItem> = ({ img, title }) => {
  return (
    <li className={styles.search}>
      <img className='' src={img} alt='' />

      <div className=''>{title}</div>
    </li>
  );
};
