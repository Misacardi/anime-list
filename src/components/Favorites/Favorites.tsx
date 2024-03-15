import { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/http.hook';

import styles from './favorites.module.css';
import axios from 'axios';
import { Spinner } from '../Spinner/spinner';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

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
    <>
      <div className={styles.favorites}>
        <ul className={styles.list}>
          <h1 className={styles.title}>Favorites</h1>
          {favList.map((e: Favorite, i) => {
            return (
              <li className={styles.item} key={i}>
                <Link to={ROUTES.ITEM + e.parentId}>
                  <div className={styles.info}>
                    <img src={e.img} alt='Anime image' />
                    <div className={styles.animeTitle}>{e.title}</div>
                  </div>
                </Link>
                <img
                  onClick={() => deleteAnime(e.id)}
                  className={styles.like}
                  src='./star2.svg'
                  alt='delete like'
                />
              </li>
            );
          })}
        </ul>
        {Error}
      </div>
      <div className={styles.loading}>
        {!loading ? null : <Spinner />}
        {favList.length || loading || error ? null : <>Not Found</>}
      </div>
    </>
  );
};
