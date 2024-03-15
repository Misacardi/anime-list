/* eslint-disable react-hooks/exhaustive-deps */

import { Spinner } from '../Spinner/spinner.tsx';
import Card from '../Card/Card.tsx';
import styles from './CardList.module.css';
import { FC } from 'react';

interface CardList {
  list: AnimeInfo[];
  addFavorite: (e: AnimeInfo, i: number) => void;
  loadMore: () => void;
  loading: boolean;
}

const CardList: FC<CardList> = ({ list, addFavorite, loading, loadMore }) => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Anime List</h2>
        <ul className={styles.list}>
          {list.map((e, i) => {
            return (
              <Card
                title={e.attributes.canonicalTitle}
                img={e.attributes.posterImage.medium}
                id={e.id}
                key={e.id}
                addFavorite={() => addFavorite(e, i)}
                favorite={e.favorite}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.button}>
        {!loading ? <button onClick={loadMore}>Load more</button> : <Spinner />}
      </div>
    </>
  );
};

export default CardList;
