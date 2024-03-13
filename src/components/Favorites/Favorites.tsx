import { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/http.hook';

import styles from './favorites.module.css';
import axios from 'axios';
import { Spinner } from '../Spinner/spinner';

export const Favorites = () => {
  const [favList, setFavList] = useState<Favorite[]>([]);

  const { request, loading, error } = useHttp();
  const getFavList = async () => {
    request('https://e971a4c5e7751391.mokky.dev/favorites').then((data) =>
      setFavList(data),
    );
  };
  useEffect(() => {
    getFavList();
    console.log('favidd', favList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteAnime = (id: Favorite['id']) => {
    axios.delete(`https://e971a4c5e7751391.mokky.dev/favorites/${id}`);
    const newFav = favList.filter((e) => e.id !== id);
    setFavList(newFav);
  };

  const Error = !error ? null : (
    <img className={styles.found} src='./notFound.png' alt='' />
  );

  return (
    <div className={styles.favorites}>
      <h1 className={styles.title}>Favorites</h1>

      <ul className={styles.list}>
        <div className={styles.loading}>
          {!loading ? null : <Spinner />}
          {favList.length || loading ? null : <>Not Found</>}
          {Error}
        </div>

        {favList.map((e: Favorite, i) => {
          return (
            <li className={styles.item} key={i}>
              <div className={styles.info}>
                <img src={e.img} alt='Anime image' />
                <div className={styles.animeTitle}>{e.title}</div>
              </div>
              <img
                onClick={() => deleteAnime(e.id)}
                className={styles.like}
                src='./star2.svg'
                alt=''
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
