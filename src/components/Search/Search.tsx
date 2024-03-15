import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchItem } from '../SearchItem/SearchItem';

import styles from './Search.module.css';

export const Search = () => {
  const [input, setInput] = useState('');

  const [searchedAnime, setSearchAnime] = useState<AnimeInfo[]>([]);

  const searchAnime = async () => {
    const { data } = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[text]=${input}}`,
    );
    setSearchAnime(data.data);
  };

  useEffect(() => {
    searchAnime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div className=''>
      <div className={styles.search}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search'
          className=''
          type='text'
        />
        <img src='/search.svg' alt='search icon' className={styles.icon} />

        {input ? (
          <img
            onClick={() => setInput('')}
            src='/x-icon.svg'
            alt='search icon'
            className={styles.xicon}
          />
        ) : (
          <></>
        )}
      </div>

      <ul className={styles.searchList}>
        {input ? (
          searchedAnime.map((e) => {
            return (
              <SearchItem
                resetInput={() => setInput('')}
                key={e.id}
                id={e.id}
                title={e.attributes.canonicalTitle}
                img={e.attributes.posterImage.tiny}
              />
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};
